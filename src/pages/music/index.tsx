import React, { PropsWithChildren } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic  from 'next/dynamic'
const Music = dynamic(() => import('./music'), { ssr: false })

const Index = () => {
  return (
    <div className={classNames('container py-12')}>
      <div className='mb-2'>创作不易，喜欢的话麻烦关注一下我的&nbsp;
      <span className="inline-block rounded border bg-amber-500/10 text-amber-900 border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-500 px-2 py-1 text-xs leading-none">
      <Link href="https://music.163.com/#/artist?id=36523817"> 网易云账号❤</Link>
    </span>
    </div>
      <Music />
    </div>
  )
}

export const getStaticProps: GetStaticProps<any> = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  }
}

export default Index
