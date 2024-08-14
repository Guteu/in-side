function Post(props = {
    title: "Carregando...",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
    date: "00/00/0000",
    text: "Carregando...",
    location: null
}) {
    return(
        <div className="card">
            <h1 className="card-title">{props.title}</h1>
            <div className="box-image">
                {
                    props.image !== "" ? <img className='card-image' src={props.image} alt="foto" /> : <></>
                }
            </div>
            <p className="card-text">{props.date}</p>
            {
                props.location !== null ? <p className="card-text">📍 - {props.location}</p> : null
            }
            <p className="card-text">{props.text}</p>
        </div>
    )
}

export default Post

//<p className="card-text">{props.location ?? "Desconhecido"}</p>