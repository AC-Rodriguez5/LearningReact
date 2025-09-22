
function imageCard(props) {
    return(
    <div className="Img-block">
        <img src={props.img} alt="Image" className="Image" />
        <h2 className="Title">{props.title}</h2>
        <p className="Short Paragraph">{props.paragraph}</p>
    </div>
  );
}


export default imageCard