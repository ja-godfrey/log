import path from "node:path"
import { spawnSync } from "node:child_process"
import { fileURLToPath } from "node:url"

import { siteOutputRoot } from "./research-data-paths.mjs"

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const repositoryRoot = path.resolve(scriptDir, "..")
const quartzCli = path.join(repositoryRoot, "quartz", "bootstrap-cli.mjs")
const args = process.argv.slice(2)
const hasOutput = args.some((argument) => argument === "-o" || argument === "--output")

if (!hasOutput) {
  args.push("--output", siteOutputRoot())
}

const result = spawnSync(process.execPath, [quartzCli, ...args], {
  cwd: repositoryRoot,
  env: process.env,
  stdio: "inherit",
})

if (result.error) {
  throw result.error
}

process.exitCode = result.status ?? 1

