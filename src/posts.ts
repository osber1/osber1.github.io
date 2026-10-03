export interface Post {
  slug: string
  title: string
  date: string
  category: string
  tags: string[]
  summary: string
  body: string
}

const files = import.meta.glob('./content/posts/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>

function parse(path: string, raw: string): Post {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!m) throw new Error(`Bad front matter in ${path}`)
  const meta: Record<string, string> = {}
  for (const line of m[1].split('\n')) {
    const i = line.indexOf(':')
    meta[line.slice(0, i).trim()] = line.slice(i + 1).trim()
  }
  const str = (v: string) => (v.startsWith('"') ? (JSON.parse(v) as string) : v)
  return {
    slug: path.split('/').pop()!.replace(/\.md$/, ''),
    title: str(meta.title),
    date: meta.date,
    category: meta.category,
    tags: JSON.parse(meta.tags) as string[],
    summary: str(meta.summary),
    body: m[2],
  }
}

export const posts: Post[] = Object.entries(files)
  .map(([p, r]) => parse(p, r))
  .sort((a, b) => b.date.localeCompare(a.date))

export const formatDate = (d: string) =>
  new Date(d + 'T00:00:00').toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' })
