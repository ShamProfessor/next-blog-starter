import React, { PropsWithChildren } from 'react'
import style from './styles.module.scss'
import classNames from 'classnames'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Tag: React.FC<PropsWithChildren> = props => {
  return (
    <span className="inline-block rounded border bg-amber-500/10 text-amber-900 border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-500 px-2 py-1 text-xs leading-none">
      {props.children}
    </span>
  )
}
const Index: NextPageWithCustomProps = () => {
  return (
    <div className={classNames('container py-12', style.about)}>
      <h2>🎨 关于本站</h2>
      <p>记录一些开发和生活日常。</p>

      <h2>👶🏻 关于我</h2>
      <p>一个前端开发工程师，一个原创说唱爱好者，一个艺术家。我的技能 👇🏻</p>
      <div className="flex items-start flex-wrap gap-2">
        <Tag>React</Tag>
        <Tag>Vue2</Tag>
        <Tag>TypeScript</Tag>
        <Tag>Next.js</Tag>
        <Tag>Tailwind</Tag>
        <Tag>pnpm</Tag>
        <Tag>yarn</Tag>
        <Tag>monorepo</Tag>
        ...
      </div>

      <h2>📮 找到我</h2>
      <ul>
        <li>Email - <Link href="mailto:shammprofessor@gmail.com">shammprofessor@gmail.com</Link></li>
        <li>Github - <Link href="https://github.com/ShamProfessor">https://github.com/ShamProfessor</Link></li>
        <li>网易云音乐 - <Link href="https://music.163.com/#/artist?id=36523817">https://music.163.com/#/artist?id=36523817</Link></li>
      </ul>

      {/* <h2>🧭 参考</h2>
      本站灵感与部分代码参考或直接来自以下网站
      <ul>
        <li><Link href="https://www.joshwcomeau.com">https://www.joshwcomeau.com</Link></li>
        <li><Link href="https://leerob.io">https://leerob.io</Link></li>
        <li><Link href="https://blog.maximeheckel.com">https://blog.maximeheckel.com</Link></li>
        <li><Link href="https://vuepress.vuejs.org">https://vuepress.vuejs.org</Link></li>
        <li><Link href="https://react-spring.dev">https://react-spring.dev</Link></li>
        <li><Link href="https://github.com/iissnan/hexo-theme-next">https://github.com/iissnan/hexo-theme-next</Link></li>
        <li><Link href="https://github.com/sanjinhub/hexo-theme-geek">https://github.com/sanjinhub/hexo-theme-geek</Link></li>
        <li><Link href="https://github.com/nanxiaobei/hugo-paper">https://github.com/nanxiaobei/hugo-paper</Link></li>
      </ul> */}
    </div>
  )
}

export const getStaticProps: GetStaticProps<any, { slug: string }> = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  }
}

export default Index
