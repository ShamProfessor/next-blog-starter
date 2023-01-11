import { FiGithub, FiLink } from 'react-icons/fi'
import { RiNeteaseCloudMusicLine } from 'react-icons/ri'

const config = {
  name: 'Owen',
  title: "Owen's blog",
  desc: 'Rapper and Web Developer',
  avatar: '/avatar.jpg',
  logo: '/logo.svg', // header 左侧 logo
  socials: [
    {
      label: 'Github',
      icon: <FiGithub className="text-lg" aria-hidden />,
      link: 'https://github.com/imzxj',
    },
    {
      label: '网易音乐人',
      icon: <RiNeteaseCloudMusicLine className="text-lg" aria-hidden />,
      link: 'https://music.163.com/#/artist?id=36523817',
    },
  ],
  blogroll: [
    { name: '赖同学', link: 'https://www.laibh.com' },
    { name: '鯊手', link: 'https://www.cnblogs.com/Scooby' },
    { name: 'mghio', link: 'https://www.mghio.cn' },
  ],
}

export default config
