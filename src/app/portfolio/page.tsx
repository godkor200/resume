import Nav from '@/components/Nav'
import HeroSimple from '@/components/HeroSimple'
import PortfolioDecision from '@/components/PortfolioDecision'
import SideProject from '@/components/SideProject'
import Contribution from '@/components/Contribution'
import Footer from '@/components/Footer'

export default function PortfolioPage() {
  return (
    <main>
      <Nav />
      <HeroSimple />
      <PortfolioDecision />
      <SideProject />
      <Contribution />
      <Footer />
    </main>
  )
}
