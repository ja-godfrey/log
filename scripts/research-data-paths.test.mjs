import assert from "node:assert/strict"
import path from "node:path"
import test from "node:test"

import { researchProjectRoot, siteOutputRoot } from "./research-data-paths.mjs"

test("RESEARCH_DATA_ROOT selects the migrated log tree", () => {
  const environment = { RESEARCH_DATA_ROOT: "C:/research" }
  assert.equal(researchProjectRoot(environment), path.resolve("C:/research", "log"))
  assert.equal(siteOutputRoot(environment), path.resolve("C:/research", "log", "public"))
})

test("LOG_RUNTIME_ROOT wins over the shared root", () => {
  const environment = {
    RESEARCH_DATA_ROOT: "C:/research",
    LOG_RUNTIME_ROOT: "D:/log-runtime",
  }
  assert.equal(researchProjectRoot(environment), path.resolve("D:/log-runtime"))
})

test("missing configuration fails closed", () => {
  assert.throws(() => researchProjectRoot({}), /Set LOG_RUNTIME_ROOT/)
})

