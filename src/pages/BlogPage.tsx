import { posts } from '../posts'
import { BlogCard } from '../components/home/BlogCards'
import PageBand from './PageBand'

export default function BlogPage() {
  return (
    <main>
      <PageBand eyebrow="Some" title="Blog Post" />
      <section className="page-content" aria-label="All posts">
        <div className="container">
          <div className="page-grid">
            {posts.map(p => <BlogCard key={p.slug} post={p} />)}
          </div>
        </div>
      </section>
    </main>
  )
}
