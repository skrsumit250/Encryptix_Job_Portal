import '../styles/card.css'
import Card from "./Card";
import React,{useEffect, useState} from 'react'
import axios from 'axios';

function JobBox(props){
    const [jobs, setJobs] = useState([]);
    
    useEffect(() => {
      
      
      const fetchJobs = async () => {
        try {
          const URL = props.url;
          const response = await axios.get(`${URL}/Jobs`);
          setJobs(response.data);
          console.log("server is running");
         
        } catch (err) {
          console.error(err);
        }
      };
  
      fetchJobs();
    }, []);

    const filteredJobs = (location.pathname === '/'  ? jobs.slice(0, 3) : jobs);
    return(
        <div className="Box">
            {jobs.length==0 && <p id='load'>Loading.....</p>}
            {filteredJobs.map((job)=>
                <Card key={job._id} data={job}/>
            )}
        </div>
    )
}
export default JobBox;