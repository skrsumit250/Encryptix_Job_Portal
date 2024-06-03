import React, { useState } from 'react';
import '../styles/postjobs.css';

function PostJobs() {
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [experience, setExperience] = useState('');
  const [location, setLocation] = useState('');
  const [skills, setSkills] = useState('');
  const [description, setDescription] = useState('');
  const [imgURL, setImgURL] = useState('');

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
      const response = await fetch('http://localhost:5000/postjobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jobData),
      });

      const data = await response.json();
      console.log(data);

      if (data.success) {
        console.log('Job posted successfully!');
        setCompany('');
        setRole('');
        setExperience('');
        setLocation('');
        setSkills('');
        setDescription('');
        setImgURL('');
      }
      else{
        console.error('Error posting job:', data.error);
      }
    }catch (error) {
      console.error('Error submitting job:', error);
    }
  };

  return (
    <div className="post">
      <form action="" className='forms' onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
}

export default PostJobs;
