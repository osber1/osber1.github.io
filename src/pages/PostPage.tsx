import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { formatDate, posts } from '../posts'
import NotFound from './NotFound'

// Stub: Step E restyles.
export default function PostPage() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)
  if (!post) return <NotFound />
  return (
    <main className="container">
      <Link to="/blog">← Writing</Link>
      <h1>{post.title}</h1>
      <p>
        {formatDate(post.date)} · {post.category} · {post.tags.map(t => `#${t}`).join(' ')}
      </p>
      <article className="prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>{post.body}</ReactMarkdown>
      </article>
    </main>
  )
}
