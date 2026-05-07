import Nav from '@/components/Nav'
import HeroSimple from '@/components/HeroSimple'
import Portfolio from '@/components/Portfolio'
import SideProject from '@/components/SideProject'
import Contribution from '@/components/Contribution'
import Footer from '@/components/Footer'

export default function PortfolioPage() {
  return (
    <main>
      <Nav />
      <HeroSimple />
      <Portfolio />
      <SideProject />
      <Contribution />
      <Footer />
    </main>
  )
}
