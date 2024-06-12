import '../styles/navbar.css'
import {Link} from 'react-router-dom'
function Navbar(){
    return(
        <div className="navbar">
            <h1>Job.Search( )</h1>
            <ul className='nav-links'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Jobs">Find Jobs</Link></li>
                <li><Link to="/Post_Jobs">Post Jobs</Link></li>
                <li><Link to="/Contact">Contact Us</Link></li>
            </ul>
        </div>
    )
}
export default Navbar;