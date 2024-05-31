import '../styles/navbar.css'
import {Link} from 'react-router-dom'
function Navbar(){
    return(
        <div className="navbar">
            <h1>Job.Search( )</h1>
            <ul className='nav-links'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Jobs">Jobs</Link></li>
                <li><Link to="/About">About Us</Link></li>
                <li><Link to="/Contact">Contact Us</Link></li>
            </ul>
            <div className="user"><Link to="/user"><img src="/BlueSkull.png" alt="" /></Link></div>
        </div>
    )
}
export default Navbar;