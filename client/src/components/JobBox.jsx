import '../styles/card.css'
import Card from "./Card";
function JobBox(){
    const data={
        company:"Microsoft",
        role:"Software",
        experience:"1-2 years",
        location:"Bangalore",
        skills:"HTML, CSS, Node JS",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente possimus ratione quisquam ea nam in veniam odit. Consectetur dolore ratione, "
    }
    return(
        <div className="Box">
            <Card data={data}/>
            <Card data={data}/>
            <Card data={data}/>
            <Card data={data}/>

        </div>
    )
}
export default JobBox;