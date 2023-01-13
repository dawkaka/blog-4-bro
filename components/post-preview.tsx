import Avatar from './avatar'
import DateFormatter from './date-formatter'
import cn from 'classnames'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'
import Image from "next/image"

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div className="flex flex-col">
      <div className="mb-5">
        <img
          src={coverImage}
          alt={`Cover Image for ${title}`}
          className=""
          style={{
            height: "300px",
            objectFit: "cover"
          }}
        />
      </div>
      <h3 className="text-2xl mb-3 leading-normal">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-[grey]">
        <DateFormatter dateString={date} />
      </div>
      <Link
        as={`/posts/${slug}`}
        href="/posts/[slug]"
        className="bg-[red] text-white px-5 py-2 mt-[auto]"
      >
        Read more
      </Link>
    </div>
  )
}

export default PostPreview
