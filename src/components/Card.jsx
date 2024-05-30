function Card(props){
    const { company, role, experience, location, date } = props.data;
    return(
        <div className="card">
            <img src="/BlueSkull.png" alt="" />
            <div className="details">
                <li>{company}</li>
                <li>{role}</li>
                <li>{experience}</li>
                <li>{location}</li>
                <li>{date}</li>
            </div>
        </div>
    )
}
export default Card;
