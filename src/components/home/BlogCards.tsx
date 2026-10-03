import { Link } from 'react-router-dom'
import { profile } from '../../data/profile'
import { formatDate, posts, type Post } from '../../posts'
import SectionHeading from '../ui/SectionHeading'

export function BlogCard({ post }: { post: Post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="blog-card">
      <time dateTime={post.date} className="blog-card__date">{formatDate(post.date)}</time>
      <h3 className="blog-card__title">{post.title}</h3>
      <span className="blog-card__more">{profile.blog.more}</span>
    </Link>
  )
}

export function BlogCards() {
  return (
    <section id="blog" data-section="blog" className="blog">
      <div className="container">
        <SectionHeading eyebrow={profile.blog.eyebrow} title={profile.blog.title} align="left" />
        <div className="blog-grid">
          {posts.slice(0, profile.blog.count).map(p => <BlogCard key={p.slug} post={p} />)}
        </div>
      </div>
    </section>
  )
}
