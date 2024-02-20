import useHasMounted from '@/hooks/useHasMounted'
import dynamic from 'next/dynamic'
const RcPlayer = dynamic(() => import('react-aplayer'), { ssr: false }) as any
import React, { useEffect } from 'react'


const audio = [
  {
    name: '绝绝子',
    artist: 'Sham.教授',
    url:"http://music.owenclub.site/%E7%BB%9D%E7%BB%9D%E5%AD%90.mp3",
    cover: 'https://i.ibb.co/b1Pv7NQ/image.jpg',
    // lrc: 'lrc1.lrc',
  },
  {
    name: '一个长沙人',
    artist: 'Sham.教授',
    url: 'http://music.owenclub.site/%E4%B8%80%E4%B8%AA%E9%95%BF%E6%B2%99%E4%BA%BA.mp3',
    cover: 'https://i.ibb.co/b1Pv7NQ/image.jpg',
    // lrc: 'lrc1.lrc',
  },
  {
    name: "Don't touch my code",
    artist: 'Sham.教授',
    url: 'http://music.owenclub.site/Don%27t%20touch%20my%20code.mp3',
    cover: 'https://i.ibb.co/b1Pv7NQ/image.jpg',
    // lrc: 'lrc1.lrc',
  },
  {
    name: 'Emotion Freestyle',
    artist: 'Sham.教授',
    url: 'http://music.owenclub.site/Emotion%20Freestyle.mp3',
    cover: 'https://i.ibb.co/b1Pv7NQ/image.jpg',
    // lrc: 'lrc1.lrc',
  },
  {
    name: '24 Part I',
    artist: 'Sham.教授',
    url: 'http://music.owenclub.site/24%20part%20I.mp3',
    cover: 'https://i.ibb.co/b1Pv7NQ/image.jpg',
    // lrc: 'lrc1.lrc',
  },
  {
    name: '24 Part II',
    artist: 'Sham.教授',
    url: 'http://music.owenclub.site/24%20part%20II.mp3',
    cover: 'https://i.ibb.co/b1Pv7NQ/image.jpg',
    // lrc: 'lrc1.lrc',
  },
  {
    name: '白夜',
    artist: 'Sham.教授',
    url: 'http://music.owenclub.site/%E7%99%BD%E5%A4%9C.mp33',
    cover: 'https://i.ibb.co/b1Pv7NQ/image.jpg',
    // lrc: 'lrc1.lrc',
  },
  {
    name: '1215',
    artist: 'Sham.教授',
    url: 'http://music.owenclub.site/1215.mp3',
    cover: 'https://i.ibb.co/b1Pv7NQ/image.jpg',
    // lrc: 'lrc1.lrc',
  },
]
const Music = () => {
  const onInit = ()=>{
    setTimeout(()=>{
    const wrapper = document.querySelector('.aplayer') as any
    wrapper.style.background = 'unset'
    },0)
  }

  return (
    <RcPlayer audio={audio as any} onInit={onInit}/>
  )
}

export default Music
