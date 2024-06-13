import React, { useState } from 'react';
import '../styles/postjobs.css';

function PostJobs(props) {
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [experience, setExperience] = useState('');
  const [location, setLocation] = useState('');
  const [skills, setSkills] = useState('');
  const [description, setDescription] = useState('');
  const [imgURL, setImgURL] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const jobData = {
      company,
      role,
      experience,
      location,
      skills,
      description,
      imgURL,
    };
    try {
      const URL = props.url;
      const response = await fetch(`${URL}/postjobs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jobData),
      });

      const data = await response.json();
      console.log(data);

      if (data.success) {
        setCompany('');
        setRole('');
        setExperience('');
        setLocation('');
        setSkills('');
        setDescription('');
        setImgURL('');
        setMessage("Job Posted Successfully!");
        console.log('Job posted successfully!');
        console.log(message);
      }
      else{
        console.error('Error posting job:', data.error);
        setMessage("Job Posted Unsuccessfully, Please try again!")
      }
    }catch (error) {
      console.error('Error submitting job:', error);
    }
  };

  return (
    <div className="post">
      <form action="" className='forms' onSubmit={handleSubmit}>
        <h1>Form</h1>
        <label>Company</label>
        <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} required />

        <label>Role</label>
        <input type="text" value={role} onChange={(e) => setRole(e.target.value)} required />

        <label>Experience</label>
        <input type="text" value={experience} onChange={(e) => setExperience(e.target.value)} required />

        <label>Location</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />

        <label>Skills</label>
        <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} required />

        <label>Logo URL</label>
        <input type="text" value={imgURL} onChange={(e) => setImgURL(e.target.value)} required/>

        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>

        <button type="submit">Submit</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default PostJobs;
