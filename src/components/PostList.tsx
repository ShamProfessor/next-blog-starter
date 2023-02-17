import React from 'react'
import Link from 'next/link'
import dayjs from 'dayjs'

export interface PostListProps {
  posts: Post[]
}

const PostList: React.FC<PostListProps> = props => {
  const { posts } = props

  return (
    <div className="flex-1">
      {posts.map(({ frontmatter, slug }, idx) => (
        <div key={idx}>
          {/* {(idx === 0 ||
            dayjs(posts[idx - 1].frontmatter.date).year() !== dayjs(frontmatter.date).year()) && (
            <h2 className="font-medium text-2xl sm:text-3xl before:content-['#_'] before:text-primary">
              {dayjs(frontmatter.date).year()}
            </h2>
          )} */}
          <article key={idx} className="my-8">
            <h3 className="text-lg sm:text-xl">
              <Link href={`/posts/${slug}`}>
                <a className="rounded-lg  px-4 py-2 hover:text-primary hover:bg-slate-200/50 dark:hover:bg-zinc-800/50">{frontmatter.title}</a>
              </Link>
            </h3>
            {/*todo： 替换成标签类别 */}
            {/* <span className="font-medium inline-block text-sm mt-2 opacity-50">
              {dayjs(frontmatter.date).format('LL')}
            </span> */}
          </article>
        </div>
      ))}
    </div>
  )
}

export default PostList
