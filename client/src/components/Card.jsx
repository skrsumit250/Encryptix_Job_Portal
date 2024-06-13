import '../styles/card.css'
import {Link} from 'react-router-dom'
function Card(props){
    const { _id,company, role, experience, location,skills ,description,imgURL} = props.data;

    return(
        <div className="card">
            <img src={imgURL} alt="" />
            <div className="details">
                <li>{company} | {role}</li>
                <li>Experince: {experience} | location: {location}</li>
                <li>Skills Required : {skills}</li>
                <li>{description}</li>
                <button><Link to={`/Apply/${_id}`}>Apply</Link></button>
            </div>
        </div>
    )
}
export default Card;
