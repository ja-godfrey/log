import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

const explorerOpts = {
  folderDefaultState: "open" as const,
  filterFn: (node: any) => node.name !== "tags" && node.name !== "_archive",
  sortFn: (a: any, b: any) => {
    const rootOrder: Record<string, number> = {
      talks: 0,
      questions: 1,
    }
    const aRootOrder = rootOrder[a.name] ?? 99
    const bRootOrder = rootOrder[b.name] ?? 99
    if (aRootOrder !== 99 || bRootOrder !== 99) return aRootOrder - bRootOrder

    if (a.file && !b.file) return 1
    if (!a.file && b.file) return -1
    if (!a.file && !b.file) {
      const order: Record<string, number> = {
        "education-policy": 0,
        "writing-ai": 1,
        "cultural-analytics": 2,
      }
      const aOrder = order[a.name] ?? 99
      const bOrder = order[b.name] ?? 99
      if (aOrder !== 99 || bOrder !== 99) return aOrder - bOrder
    }
    return a.displayName.localeCompare(b.displayName, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  },
  mapFn: (node: any) => {
    if (!node.file) {
      const names: Record<string, string> = {
        "education-policy": "Education Policy & Data Science",
        "writing-ai": "Writing, Assessment & AI",
        "cultural-analytics": "Cultural Analytics",
      }
      if (names[node.name]) node.displayName = names[node.name]
    }
  },
}

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/ja-godfrey",
      LinkedIn: "https://www.linkedin.com/in/jasonmgodfrey/",
      ORCID: "https://orcid.org/0000-0002-1977-9427",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer(explorerOpts)),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer(explorerOpts)),
  ],
  right: [],
}
