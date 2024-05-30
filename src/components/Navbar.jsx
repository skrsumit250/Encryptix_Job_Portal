import '../styles/navbar.css'
function Navbar(){
    return(
        <div className="navbar">
            <h1>Job.Search( )</h1>
            <ul className='nav-links'>
                <li><a href="">Jobs</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Contact Us</a></li>
            </ul>
            <div className="user"><a href=""><img src="/BlueSkull.png" alt="" /></a></div>
        </div>
    )
}
export default Navbar;