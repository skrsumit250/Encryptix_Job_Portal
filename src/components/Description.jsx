import '../styles/description.css'
function Description(){
    const headline="This is Headline";
    const paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente possimus ratione quisquam ea nam in veniam odit. Consectetur dolore ratione, omnis accusantium deserunt amet! Quo, accusamus, ducimus dolorum natus reprehenderit omnis adipisci repudiandae ut quisquam cupiditate soluta delectus molestias sequi cum voluptatem vitae a? Quaerat qui rem soluta vero minima?";
    return(
        <div className="Description-Box">
            <h1>{headline}</h1>
            <p>{paragraph}</p>
        </div>
    )
}
export default Description;