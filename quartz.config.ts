import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "🧠 Můj Vault",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "cs-CZ",
    baseUrl: "krystofham.github.io/prednasky-a-zapisy",
    ignorePatterns: ["private", "templates", ".obsidian", ".trash", "*.canvas"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Playfair Display",
        body: "Source Serif 4",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f4", lightgray: "#ede9e0", gray: "#9c9080",
          darkgray: "#3d3530", dark: "#1a1410", secondary: "#7c5c3e",
          tertiary: "#b08060", highlight: "rgba(124, 92, 62, 0.10)",
          textHighlight: "#f5e6c8",
        },
        darkMode: {
          light: "#16130f", lightgray: "#2a2318", gray: "#7a6e62",
          darkgray: "#cdc4b8", dark: "#f0ebe3", secondary: "#d4a574",
          tertiary: "#b08060", highlight: "rgba(212, 165, 116, 0.12)",
          textHighlight: "#3d2d1a",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({ priority: ["frontmatter", "filesystem"] }),
      Plugin.SyntaxHighlighting({ theme: { light: "github-light", dark: "github-dark" }, keepBackground: false }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markBroken: true }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(), Plugin.ComponentResources(), Plugin.ContentPage(),
      Plugin.FolderPage(), Plugin.TagPage(),
      Plugin.ContentIndex({ enableSiteMap: true, enableRSS: true }),
      Plugin.Assets(), Plugin.Static(), Plugin.NotFoundPage(),
    ],
  },
}

export default config
