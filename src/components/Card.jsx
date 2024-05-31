import '../styles/card.css'
function Card(props){
    const { company, role, experience, location,skills ,description} = props.data;
    return(
        <div className="card">
            <img src="/BlueSkull.png" alt="" />
            <div className="details">
                <li>{company} | {role}</li>
                <li>Experince: {experience} | location: {location}</li>
                <li>Skills Required : {skills}</li>
                <li>{description}</li>
                <button>Apply</button>
            </div>
        </div>
    )
}
export default Card;
