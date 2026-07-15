import fs from "node:fs"
import path from "node:path"

const root = path.resolve(process.argv[2] ?? "public")

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    return entry.isDirectory() ? walk(full) : [full]
  })
}

function resolveLocalReference(fromFile, rawReference) {
  const reference = rawReference.replaceAll("&amp;", "&").trim()
  if (
    reference === "" ||
    reference.startsWith("#") ||
    reference.startsWith("//") ||
    /^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(reference) ||
    reference.includes("${")
  ) {
    return null
  }

  const withoutFragment = reference.split("#", 1)[0].split("?", 1)[0]
  let decoded
  try {
    decoded = decodeURI(withoutFragment)
  } catch {
    decoded = withoutFragment
  }

  const target = decoded.startsWith("/")
    ? path.join(root, decoded.slice(1))
    : path.resolve(path.dirname(fromFile), decoded)

  if (!target.startsWith(root + path.sep) && target !== root) {
    return { target, exists: false, reason: "escapes output root" }
  }

  const candidates = [target]
  if (decoded.endsWith("/")) candidates.push(path.join(target, "index.html"))
  if (path.extname(target) === "") {
    candidates.push(target + ".html", path.join(target, "index.html"))
  }

  return {
    target,
    exists: candidates.some((candidate) => fs.existsSync(candidate)),
    candidates,
  }
}

if (!fs.existsSync(root)) {
  console.error(`Output directory does not exist: ${root}`)
  process.exit(2)
}

const files = walk(root)
const htmlFiles = files.filter((file) => file.endsWith(".html"))
const missing = []
const unsafeEmbeds = []
const attributePattern = /\b(?:href|src)=(?:"([^"]*)"|'([^']*)')/gi

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8")
  if (/<iframe\b|plotly(?:\.min)?\.js/i.test(html)) {
    unsafeEmbeds.push(path.relative(root, file))
  }

  for (const match of html.matchAll(attributePattern)) {
    const raw = match[1] ?? match[2] ?? ""
    const resolved = resolveLocalReference(file, raw)
    if (resolved && !resolved.exists) {
      missing.push({ from: path.relative(root, file), reference: raw })
    }
  }
}

const forbiddenExtensions = new Set([
  ".csv",
  ".tsv",
  ".jsonl",
  ".ndjson",
  ".db",
  ".sqlite",
  ".sqlite3",
  ".parquet",
  ".feather",
  ".arrow",
  ".rda",
  ".rdata",
  ".rds",
  ".sav",
  ".dta",
  ".npy",
  ".npz",
  ".pickle",
  ".pkl",
  ".xlsx",
  ".xls",
])
const forbiddenFiles = files
  .filter((file) => forbiddenExtensions.has(path.extname(file).toLowerCase()))
  .map((file) => path.relative(root, file))

const forbiddenPaths = ["html-files", "questions-kanban.html"].filter((entry) =>
  fs.existsSync(path.join(root, entry)),
)

const sitemapPath = path.join(root, "sitemap.xml")
const sitemap = fs.existsSync(sitemapPath) ? fs.readFileSync(sitemapPath, "utf8") : ""
const sitemapProblems = []
if (!sitemap.includes("/talks")) sitemapProblems.push("talks missing from sitemap")
if (/questions-kanban|questions\/_archive/.test(sitemap)) {
  sitemapProblems.push("draft/archive path present in sitemap")
}

const uniqueMissing = [
  ...new Map(missing.map((item) => [`${item.from}\0${item.reference}`, item])).values(),
]

console.log(`Checked ${htmlFiles.length} HTML files and ${files.length} output files.`)
console.log(`Missing local references: ${uniqueMissing.length}`)
for (const item of uniqueMissing.slice(0, 50)) {
  console.log(`  ${item.from} -> ${item.reference}`)
}
console.log(`Interactive/data-bearing embeds: ${unsafeEmbeds.length}`)
for (const file of unsafeEmbeds) console.log(`  ${file}`)
console.log(`Forbidden data files: ${forbiddenFiles.length}`)
for (const file of forbiddenFiles) console.log(`  ${file}`)
console.log(`Forbidden output paths: ${forbiddenPaths.length}`)
for (const entry of forbiddenPaths) console.log(`  ${entry}`)
console.log(`Sitemap problems: ${sitemapProblems.length}`)
for (const problem of sitemapProblems) console.log(`  ${problem}`)

if (
  uniqueMissing.length > 0 ||
  unsafeEmbeds.length > 0 ||
  forbiddenFiles.length > 0 ||
  forbiddenPaths.length > 0 ||
  sitemapProblems.length > 0
) {
  process.exit(1)
}
