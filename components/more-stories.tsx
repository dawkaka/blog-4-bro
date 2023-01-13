import PostPreview from './post-preview'
import type Post from '../interfaces/post'
import Link from "next/link"

type Props = {
  posts: Post[],
  home: boolean
}

const MoreStories = ({ posts, home }: Props) => {
  return (
    <section className="py-[100px]">
      <h2 className="mb-8 text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
        {home ? "News Update" : "All News Updates"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:grid-cols-3 lg:gap-x-10 gap-y-20 md:gap-y-32 mb-10">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
      <div className="mt-[80px]">
        {
          home && <Link href="/blog" className="bg-[var(--p-color)] text-white px-5 py-3 mt-[50px] rounded">See all news updates</Link>
        }
      </div>
    </section>
  )
}

export default MoreStories
