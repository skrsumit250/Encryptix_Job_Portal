import Card from "./Card";
function JobBox(){
    const data={
        company:"Microsoft",
        role:"Software",
        experience:"1-2 years",
        location:"Bangalore",
        data:"31 May 2024",
    }
    return(
        <div className="Box">
            <Card data={data}/>
        </div>
    )
}
export default JobBox;