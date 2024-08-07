import {Header} from './Components'
import {IntroSection, AboutSection, PortfolioSection, ContactSection, Footer} from './Components/'
import { useRef } from 'react'

function App() {
  const footerRef = useRef(null)

  return (
    <>
      <Header footerRef={footerRef}/>
      <main>
        <IntroSection/>
        <AboutSection/>
        <PortfolioSection/>
        <ContactSection/>
      </main>
      <Footer footerRef={footerRef}/>
    </>
  )
}

export default App
