import DOMPurify from 'isomorphic-dompurify'

export type HTMLRenderizerProps = {
  rawHtml: string
}

export function HTMLRenderizer({ rawHtml }: HTMLRenderizerProps) {
  const sanitizedHTML = { __html: DOMPurify.sanitize(rawHtml) }
  return <div dangerouslySetInnerHTML={sanitizedHTML} />
}
