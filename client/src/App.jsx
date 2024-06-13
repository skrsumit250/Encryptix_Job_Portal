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
  const server_PORT = 5000;
  const Home =<><Description/><JobBox port={server_PORT}/></>
  const Jobs = <JobBox/>
  const Post = <PostJobs port={server_PORT}/>
  const Abouts = <Contact/>
  const Contacts = <Contact/>
  const Apply_Page = <Apply port={server_PORT}/>
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
