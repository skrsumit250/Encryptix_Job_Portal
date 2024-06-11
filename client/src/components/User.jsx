import '../styles/user.css'
import React,{useEffect, useState} from 'react'
import axios from 'axios';
function User(){
    const val = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati enim cum cupiditate nobis quas est totam voluptatibus recusandae repellat nisi!";
    const temp = 'https://github.com/skrsumit250';

    const [username,setUsername] = useState('User Name');
    const [highlight,setHighlight] = useState('This is Highlights');
    const [experience,setExperience] = useState(val);
    const [project,setProject] = useState(val);
    const [skills,setSkills] = useState(val);
    const [education,setEducation] = useState(val);
    const [links,setLinks] = useState([temp,temp,temp]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await get('http://localhost:5000/login');
            
            const data = await response.json();

            if (data.success) {
              setUsername(data.user.username || username);
              setHighlight(data.user.highlight || highlight);
              setExperience(data.user.experience || experience);
              setProject(data.user.project || project);
              setSkills(data.user.skills || []); // Assign empty array for skills
              setEducation(data.user.education || []); // Assign empty array for education
              setLinks(data.user.links || []); // Assign empty array for links
            } else {
              setErrorMessage(data.message || 'Login failed.'); // Handle unsuccessful login
            }
          } catch (error) {
            console.error('Error fetching user data:', error);
            setErrorMessage('An error occurred. Please try again later.'); // User-friendly error message
          }
        };
    
        fetchData();
      }, []);

    return(
        <div className="user">
            <div className="header">
                <img src="/BlueSkull.png" alt="" id='profile-image' />
                <ul>
                    <h1>{username}</h1>
                    <h3>{highlight}</h3>
                    <div className="links">
                        {links.map((link) => <a href={link}><img src="/BlueSkull.png" alt="" /></a>)}
                    </div>
                </ul>
            </div>
            <div className="user-details">
                <h3>Experience</h3>
                <p>{experience}</p>

                <h3>Projects</h3>
                <p>{project}</p>

                <h3>Skills</h3>
                <p>{skills}</p>

                <h3>Education</h3>
                <p>{education}</p>

            </div>

        </div>
    )
}   
export default User;