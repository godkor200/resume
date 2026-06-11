import Nav from '@/components/Nav'
import HeroSimple from '@/components/HeroSimple'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'

// 갤러리 전용 페이지. 포트폴리오의 토글 갤러리와 달리 이미지를 바로 펼쳐 보여준다.
// PDF의 '갤러리 보기' 링크가 이 페이지로 리다이렉션된다.
export default function GalleryPage() {
  return (
    <main>
      <Nav />
      <HeroSimple />
      <Gallery />
      <Footer />
    </main>
  )
}
