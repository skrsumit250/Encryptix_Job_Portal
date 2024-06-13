import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/postjobs.css';

function Apply(props){
    const {id } = useParams();
    const key_id = id;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [education, setEducation] = useState('');
    const [experience, setExperience] = useState('');
    const [projects, setProjects] = useState('');
    const [skills, setSkills] = useState('');
    const [about, setAbout] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const UserData = {key_id,name,email,phone,education,experience,projects,skills,about};
        console.log(UserData);
        try {
        const URL = props.url;
        const response = await fetch(`${URL}/apply`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(UserData),
        });

        const data = await response.json();
        console.log(data);

        if (data.success) {
            console.log('Job applied successfully!');
            setName('');
            setEmail('');
            setPhone('');
            setEducation('');
            setExperience('');
            setProjects('');
            setSkills('');
            setAbout('');
            setMessage('Your Application is Submitted Successfully!')
        }
        else{
            console.error('Error applying job:', data.error);
            setMessage('Your Application is Submitted Unsuccessfully, Please try again');
        }
        }catch (error) {
            console.error('Error submitting job:', error);
        }
    };

  return (
    <div className="post">
      <form action="" className='forms' onSubmit={handleSubmit}>
        <h1>Form</h1>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Email</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Phone</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />

        <label>Education</label>
        <input type="text" value={education} onChange={(e) => setEducation(e.target.value)} required />

        <label>Experience</label>
        <input type="text" value={experience} onChange={(e) => setExperience(e.target.value)} required />

        <label>Projects</label>
        <input type="text" value={projects} onChange={(e) => setProjects(e.target.value)} required />

        <label>Skills</label>
        <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} required />

        <label>About</label>
        <textarea value={about} onChange={(e) => setAbout(e.target.value)} required></textarea>

        <button type="submit">Submit</button>
        {message && <p>{message}</p>}

      </form>
    </div>
  );
}
export default Apply;
