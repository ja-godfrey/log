import fs from "node:fs"
import path from "node:path"

import matter from "gray-matter"

const contentRoot = path.resolve(process.argv[2] ?? "content")
const configPath = path.resolve(process.argv[3] ?? "quartz.config.ts")
const ignoredSourceRoots = ["private", "templates", ".obsidian", "questions/_archive"]

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    return entry.isDirectory() ? walk(full) : [full]
  })
}

function relativeSourcePath(file) {
  return path.relative(contentRoot, file).split(path.sep).join("/")
}

function isIgnoredSource(relativePath) {
  return ignoredSourceRoots.some(
    (root) => relativePath === root || relativePath.startsWith(`${root}/`),
  )
}

const problems = []

if (!fs.existsSync(contentRoot)) {
  console.error(`Content directory does not exist: ${contentRoot}`)
  process.exit(2)
}

if (!fs.existsSync(configPath)) {
  console.error(`Quartz config does not exist: ${configPath}`)
  process.exit(2)
}

const config = fs.readFileSync(configPath, "utf8")
const filters = config.match(/filters\s*:\s*\[([^\]]*)\]/s)?.[1] ?? ""
if (!/Plugin\.ExplicitPublish\s*\(\s*\)/.test(filters)) {
  problems.push("Quartz filters must include Plugin.ExplicitPublish()")
}
if (/Plugin\.RemoveDrafts\s*\(/.test(filters)) {
  problems.push("Quartz filters must not include Plugin.RemoveDrafts()")
}

const markdownFiles = walk(contentRoot).filter((file) => file.endsWith(".md"))
const approved = []
const drafts = []
let ignored = 0

for (const file of markdownFiles) {
  const relativePath = relativeSourcePath(file)
  let data
  try {
    data = matter(fs.readFileSync(file, "utf8")).data
  } catch (error) {
    problems.push(`${relativePath}: invalid frontmatter (${error.message})`)
    continue
  }

  if (Object.hasOwn(data, "publish") && typeof data.publish !== "boolean") {
    problems.push(`${relativePath}: publish must be a YAML boolean`)
  }
  if (Object.hasOwn(data, "draft") && typeof data.draft !== "boolean") {
    problems.push(`${relativePath}: draft must be a YAML boolean`)
  }

  if (isIgnoredSource(relativePath)) {
    ignored += 1
    if (data.publish === true) {
      problems.push(`${relativePath}: ignored content must not carry publish: true`)
    }
    continue
  }

  if (data.publish === true) {
    if (data.draft === true) {
      problems.push(`${relativePath}: publish: true conflicts with draft: true`)
    }
    approved.push(relativePath)
  } else if (data.draft === true) {
    drafts.push(relativePath)
  } else {
    problems.push(`${relativePath}: set publish: true or draft: true explicitly`)
  }
}

for (const requiredPage of ["index.md", "talks.md"]) {
  if (!approved.includes(requiredPage)) {
    problems.push(`${requiredPage}: required public page is not approved`)
  }
}

console.log(`Checked ${markdownFiles.length} Markdown files.`)
console.log(`Approved public pages: ${approved.length}`)
console.log(`Explicit drafts: ${drafts.length}`)
console.log(`Ignored source files: ${ignored}`)
console.log(`Publication-policy problems: ${problems.length}`)
for (const problem of problems) console.log(`  ${problem}`)

if (problems.length > 0) process.exit(1)
