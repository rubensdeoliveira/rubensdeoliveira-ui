import ReactHtmlParser from 'react-html-parser'
import DOMPurify from 'isomorphic-dompurify'

export type HTMLRenderizerProps = {
  rawHtml: string
}

export function HTMLRenderizer({ rawHtml }: HTMLRenderizerProps) {
  const cleanHtml = DOMPurify.sanitize(rawHtml)
  return <>{ReactHtmlParser(cleanHtml)}</>
}
