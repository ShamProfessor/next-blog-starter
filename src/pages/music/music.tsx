import ReactPlayer from 'react-aplayer'

const audio = [
  {
    name: '绝绝子',
    artist: 'Sham.教授',
    url: 'http://m701.music.126.net/20230303215515/bc76f8e77431c5f32db54f738feb606a/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/11033400039/8e57/c577/33cc/b538615dae39c421108625be1163cca8.mp3',
    cover: 'https://i.ibb.co/b1Pv7NQ/image.jpg',
    // lrc: 'lrc1.lrc',
  },
  {
    name: '一个长沙人',
    artist: 'Sham.教授',
    url: 'http://m701.music.126.net/20230303215515/68936bc8326de3bc0ed214d059e8c48d/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/16828294118/aef7/0578/1dd8/672cd15287024af2b26669f40a01d2fd.mp3',
    cover: 'https://i.ibb.co/b1Pv7NQ/image.jpg',
    // lrc: 'lrc1.lrc',
  },
  {
    name: "Don't touch my code",
    artist: 'Sham.教授',
    url: 'http://m801.music.126.net/20230303212234/bdf1747e44c055072be74e14bc8b0c4e/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/11380018502/3838/2840/bfd8/f593035a335ecdd8c9524969c70d43da.mp3',
    cover: 'https://i.ibb.co/b1Pv7NQ/image.jpg',
    // lrc: 'lrc1.lrc',
  },
  {
    name: 'Emotion Freestyle',
    artist: 'Sham.教授',
    url: 'http://m701.music.126.net/20230303215515/10bc3e2bbf4273fcc1d0b504ef5658c4/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/15380143185/4de9/2bcf/beb8/fc70d962fc6777764d5dba466613b2a9.mp3',
    cover: 'https://i.ibb.co/b1Pv7NQ/image.jpg',
    // lrc: 'lrc1.lrc',
  },
  {
    name: '24 Part I',
    artist: 'Sham.教授',
    url: 'http://m701.music.126.net/20230303215515/b554364537419a6fc309e582c8995d0e/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/5245542931/8b70/3228/ee29/ed316f3e193f6f8c673524cea085c990.mp3',
    cover: 'https://i.ibb.co/b1Pv7NQ/image.jpg',
    // lrc: 'lrc1.lrc',
  },
  {
    name: '24 Part II',
    artist: 'Sham.教授',
    url: 'http://m701.music.126.net/20230303215515/ed62e36bfa338081748233c65a95f01b/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/12148779962/1898/d90e/5a66/acae92e79929e42ebcbb2085b57caa10.mp3',
    cover: 'https://i.ibb.co/b1Pv7NQ/image.jpg',
    // lrc: 'lrc1.lrc',
  },
  {
    name: '白夜',
    artist: 'Sham.教授',
    url: 'http://m801.music.126.net/20230303215515/612ac5f0089c64dd681f0c509fa6bc1c/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/15377252107/0a16/f4f2/5547/0049e91d1d38f0692e5c8794f7d349c7.mp3',
    cover: 'https://i.ibb.co/b1Pv7NQ/image.jpg',
    // lrc: 'lrc1.lrc',
  },
  {
    name: '1215',
    artist: 'Sham.教授',
    url: 'http://m701.music.126.net/20230303215515/2fd80d0d2ac2a86332d81e3f5ad6c02f/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/23246342196/5405/9c97/d4fc/c21880026a23eb387b318fbc435705ce.mp3',
    cover: 'https://i.ibb.co/b1Pv7NQ/image.jpg',
    // lrc: 'lrc1.lrc',
  },
]
const Music = () => {
  return (
    <>
      <ReactPlayer audio={audio} />
    </>
  )
}

export default Music
