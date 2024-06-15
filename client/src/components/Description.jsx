import '../styles/description.css'
import {Link} from 'react-router-dom'
function Description(){
    const headline="Welcome to Job.Search()";
    const paragraph="At Job.Search(), we believe in the power of connecting talent with opportunity. Whether you are a job seeker looking for the perfect role or an employer searching for the ideal candidate, we are here to make the process seamless and successful.";
    const jobseekers = " : Explore thousands of job listings from top companies.";
    const employer = " : Post job openings and find qualified candidates quickly & Browse our extensive database of job seekers.";
    return(
        <div className="Description-Box">
            <h1>{headline}</h1>
            <div className="about">
                <p>{paragraph}</p>
                <br />
                <p><Link to="/Post_Jobs">For Employers</Link>{employer}</p>
                <p><Link to="/Jobs">For Job Seekers</Link>{jobseekers}</p>
            </div>
            
        </div>
    )
}
export default Description;