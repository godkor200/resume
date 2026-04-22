import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Career from '@/components/Career'
import Portfolio from '@/components/Portfolio'
import SideProject from '@/components/SideProject'
import Contribution from '@/components/Contribution'
import Education from '@/components/Education'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Career />
      <Portfolio />
      <SideProject />
      <Contribution />
      <Education />
      <Footer />
    </main>
  )
}
