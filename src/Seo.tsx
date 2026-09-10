import { useEffect } from 'react'

const SITE = 'https://vspacez.co.in'

type SeoProps = {
  title: string
  description: string
  path: string
  markdown: string
}

function setMeta(selector: string, attr: string, value: string) {
  const el = document.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

export default function Seo({ title, description, path, markdown }: SeoProps) {
  useEffect(() => {
    const url = `${SITE}${path}`
    document.title = title
    setMeta('meta[name="description"]', 'content', description)
    setMeta('link[rel="canonical"]', 'href', url)
    setMeta('link[rel="alternate"][type="text/markdown"]', 'href', markdown)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', url)
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)
  }, [title, description, path, markdown])

  return null
}
