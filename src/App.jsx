import {Header} from './Components'
import {IntroSection, AboutSection, PortfolioSection, ContactSection, Footer} from './Components/'

function App() {

  return (
    <>
      <Header/>
      <main>
        <IntroSection/>
        <AboutSection/>
        <PortfolioSection/>
        <ContactSection/>
      </main>
      <Footer/>
    </>
  )
}

export default App
