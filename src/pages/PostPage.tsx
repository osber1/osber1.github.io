import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { formatDate, posts } from '../posts'
import ArrowLink from '../components/ui/ArrowLink'
import PageBand from './PageBand'
import NotFound from './NotFound'

export default function PostPage() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)
  if (!post) return <NotFound />
  return (
    <main>
      <PageBand
        eyebrow={`${formatDate(post.date)} · ${post.category}`}
        title={post.title}
        before={
          <div className="page-band__back">
            <ArrowLink href="/blog" tone="light">{'< back to blog >'}</ArrowLink>
          </div>
        }
      >
        {post.tags.length > 0 && (
          <ul className="tag-list" aria-label="Tags">
            {post.tags.map(t => <li key={t}>{t}</li>)}
          </ul>
        )}
      </PageBand>
      <div className="container">
        <article className="post-card">
          <div className="prose">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>{post.body}</ReactMarkdown>
          </div>
        </article>
      </div>
    </main>
  )
}
