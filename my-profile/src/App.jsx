import './App.css'
import Header from './components/Header'
import Landing from './pages/Landing'
import About from './pages/About'
import Career from './pages/Career'
import Projects from './pages/Projects'
import Footer from './components/Footer'

// Root Component, controls the layout
// <> - React Fragment, allows grouping of elements without adding extra div to the DOM
function App() {

  return (
    <>
      <Header/>
      <Landing/>
      <About/>
      <Career/>
      <Projects/>
      <Footer/>
    </>
  )
}

export default App
