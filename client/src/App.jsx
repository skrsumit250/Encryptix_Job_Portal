import './App.css'
import Navbar from './components/Navbar'
import Description from './components/Description'
import JobBox from './components/JobBox'
import Footer from './components/Footer'
import Contact from './components/Contact'
import {Route,Routes} from 'react-router-dom'

function App() {
  const Home =<><Description/><JobBox/></>
  const Jobs = <JobBox/>
  const Abouts = <Contact/>
  const Contacts = <Contact/>
  return(
    <>
        <Navbar/>
        <Routes>
          <Route path='' element={Home}/>
          <Route path='/Jobs' element={Jobs}/>
          <Route path='/About' element={Abouts}/>
          <Route path='/Contact' element={Contacts}/>
        </Routes>
        <Footer/>
    </>
  )
}

export default App
