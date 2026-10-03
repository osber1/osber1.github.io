import { posts } from '../posts'
import { BlogCard } from '../components/home/BlogCards'

// Stub: Step E restyles.
export default function BlogPage() {
  return (
    <main className="container">
      <h1>Writing</h1>
      <p>Code snippets and notes I want to find again.</p>
      {posts.map(p => <BlogCard key={p.slug} post={p} />)}
    </main>
  )
}
