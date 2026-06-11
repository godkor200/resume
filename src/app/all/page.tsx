import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import PortfolioDecision from '@/components/PortfolioDecision'
import SideProject from '@/components/SideProject'
import Contribution from '@/components/Contribution'
import CareerDescription from '@/components/CareerDescription'
import Footer from '@/components/Footer'

// 이력서 + 포트폴리오 + 경력기술서 통합본.
// 헤더(Hero)·푸터(Footer)는 한 번만 두고, 각 문서의 고유 본문만 이어붙여
// 단순 병합 시 발생하는 헤더/푸터 중복을 제거한다.
export default function AllPage() {
  return (
    <main>
      <Nav />
      <Hero />
      {/* 이력서 — 경력은 상세본인 경력기술서가 단독으로 담당 (요약 경력 섹션 제거로 중복 제거) */}
      <About />
      <Skills />
      <CareerDescription />
      <Education />
      {/* 포트폴리오 */}
      <PortfolioDecision />
      <SideProject />
      <Contribution />
      <Footer />
    </main>
  )
}
