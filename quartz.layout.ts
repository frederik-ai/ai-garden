import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { IconFolderOptions } from "./quartz/plugins/components/FileIcons";
import { filterFn, sortFn } from "./quartz/util/function";

const iconsOptions: IconFolderOptions = {
	rootIconFolder: "content/_assets/icons",
	default: {
		file: "file",
	},
};

export const secretPage: Set<string> =  new Set(["hidden"])

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    // Component.PageTitle(),
    // Component.Search()
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    // Component.Darkmode(),
    //Component.DesktopOnly(Component.Explorer({
    //  // title: "All Notes",
    //  title: "Notes",
    // })),
    Component.DesktopOnly(
			Component.ExplorerBurger({
				folderClickBehavior: "link",
				folderDefaultState: "collapsed",
				useSavedState: true,
				title: "",
				// iconSettings: iconsOptions,
				sortFn,
				filterFn
			})
    ),
    // Component.DesktopOnly(Component.RecentNotes()),
  ],
  right: [
    // Component.Graph(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    // Component.Darkmode()
  ],
  right: [],
}
