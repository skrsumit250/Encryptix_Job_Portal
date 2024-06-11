import './App.css'
import Navbar from './components/Navbar'
import Description from './components/Description'
import JobBox from './components/JobBox'
import Footer from './components/Footer'
import Contact from './components/Contact'
import PostJobs from './components/PostJobs'
// import User from './components/User'
import {Route,Routes} from 'react-router-dom'

function App() {
  const Home =<><Description/><JobBox/></>
  const Jobs = <JobBox/>
  const Post = <PostJobs/>
  const Abouts = <Contact/>
  const Contacts = <Contact/>
  // const Users = <User/>
  return(
    <>  <Navbar/>
        <Routes>
          <Route path='/' element={Home}/>
          <Route path='/Jobs' element={Jobs}/>
          <Route path='/Post_Jobs' element={Post}/>
          <Route path='/About' element={Abouts}/>
          <Route path='/Contact' element={Contacts}/>
          {/* <Route path='/user' element={Users}/> */}
        </Routes>
        <Footer/>
    </>
  )
}

export default App
