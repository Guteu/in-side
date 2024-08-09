/**
 * 
 * @param {{title: string, image: string, date: string, text: string, location: string | null}} props 
 * @returns 
 */
function Post(props) {
    return(
        <div className="card">
            <h1 className="card-title">{props.title}</h1>
            <div className="box-image">
                <img className='card-image' src={props.image.startsWith("http") ? props.image : "data:image/jpeg;charset=utf-8;base64,  ".concat(props.image)} alt="foto" />
            </div>
            <p className="card-text">{props.date}</p>
            {
                props.location !== null ? <p className="card-text">📍 - {props.location}</p> : null
            }
            <p className="card-text">Foto de uma ilha na internet</p>
        </div>
    )
}

Post.defaultProps = {
    title: "Carregando...",
    image: "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
    date: "00/00/0000",
    text: "Carregando...",
    location: null
}

export default Post

//<p className="card-text">{props.location ?? "Desconhecido"}</p>