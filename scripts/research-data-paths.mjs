import path from "node:path"
import { fileURLToPath } from "node:url"

export function researchProjectRoot(environment = process.env) {
  const override = environment.LOG_RUNTIME_ROOT?.trim()
  if (override) {
    return path.resolve(override)
  }

  const researchRoot = environment.RESEARCH_DATA_ROOT?.trim()
  if (researchRoot) {
    return path.resolve(researchRoot, "log")
  }

  throw new Error(
    "Set LOG_RUNTIME_ROOT or RESEARCH_DATA_ROOT. Expected site output at " +
      "RESEARCH_DATA_ROOT/log/public.",
  )
}

export function siteOutputRoot(environment = process.env) {
  return path.join(researchProjectRoot(environment), "public")
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  if (process.argv[2] === "--print-site-output") {
    console.log(siteOutputRoot())
  }
}

