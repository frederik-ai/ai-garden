import { pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function PageTitle({ fileData, cfg, displayClass }: QuartzComponentProps) {
  const title = cfg?.pageTitle ?? "Untitled Quartz"
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h1 class={`page-title ${displayClass ?? ""}`}>
      <a href={baseDir}>{title}</a>
    </h1>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
  /*text-align: center;*/ /* added */
  /*padding-bottom: 0.5em;*/ /* added */
  /*font-size: 1.75em;*/ /* added */
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
