import '../styles/card.css'
import Card from "./Card";
import React,{useEffect, useState} from 'react'
import axios from 'axios';

function JobBox(){
    const [jobs, setJobs] = useState([]);
    
    useEffect(() => {
      
      
      const fetchJobs = async () => {
        try {
          const PORT = props.port
          const response = await axios.get(`http://localhost:${PORT}/Jobs`);
          setJobs(response.data);
        } catch (err) {
          console.error(err);
        }
      };
  
      fetchJobs();
    }, []);

    const filteredJobs = (location.pathname === '/'  ? jobs.slice(0, 3) : jobs);

    return(
        <div className="Box">
            {filteredJobs.map((job)=>
                <Card key={job._id} data={job}/>
            )}
        </div>
    )
}
export default JobBox;