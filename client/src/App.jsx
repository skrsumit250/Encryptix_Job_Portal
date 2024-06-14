import './App.css'
import Navbar from './components/Navbar'
import Description from './components/Description'
import JobBox from './components/JobBox'
import Footer from './components/Footer'
import Contact from './components/Contact'
import PostJobs from './components/PostJobs'
import Apply from './components/Apply'
import {Route,Routes} from 'react-router-dom'

function App() {
  const URL = "https://job-portal-server-zspl.onrender.com"
  const Home =<><Description/><JobBox url={URL}/></>
  const Jobs = <JobBox url={URL}/>
  const Post = <PostJobs url={URL}/>
  const Abouts = <Contact/>
  const Contacts = <Contact/>
  const Apply_Page = <Apply url={URL}/>
  return(
    <>  <Navbar/>
        <Routes>
          <Route path='/' element={Home}/>
          <Route path='/Jobs' element={Jobs}/>
          <Route path='/Post_Jobs' element={Post}/>
          <Route path='/About' element={Abouts}/>
          <Route path='/Contact' element={Contacts}/>
          <Route path='/Apply/:id' element={Apply_Page}/>
        </Routes>
        <Footer/>
    </>
  )
}

export default App
