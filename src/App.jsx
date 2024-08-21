import { useEffect, useRef, useState } from "react"
import handleMessages from "./handlers/handleMessages.js"
import Post from "./components/post/Post.jsx"
import plusSign from './assets/plus-sign.png'
import minusSign from './assets/minus-sign.png'
import convertImageToBase64 from "./handlers/imageConvert.js"
import handleSubmit from "./handlers/handleSubmit.js"
let page = 0


function App() {
    const [style, setStyle] = useState("none")
    const [addButton, setAddButton] = useState(plusSign)
    const [message, setMessage] = useState({})
    const [login, setLogin] = useState({user: "", senha: ""})

    const [postsArray, setPostsArray] = useState([])
    const inputRef = useRef()

    const handleLoginBox = () => {
        if (style == "none") {
            setStyle("block")
            setAddButton(minusSign)
        } else {
            setStyle("none")
            setAddButton(plusSign)
        }
    }

    const renderPosts = async() => {
        page = page + 1
        if(page === 0) return;
        const postsArr = []
        const posts = await handleMessages()
        if(typeof(posts) === "undefined") return;
        let postsToRender = page * 5
        for (let i = posts.postsCount - 1; i >= 0; i--) {
            const post = posts[i]
            postsArr.push(<Post title={post.name} image={post.image} date={post.date} text={post.text} location={post.location} key={postsArr.length + 1}/>)
            postsToRender--
            console.log(postsToRender, post)
            if(postsToRender <= 0) break;
        }
        if(postsArr.length == postsArray.length) {
            page--
            console.log("nada mudou.")
            return
        }
        setPostsArray(postsArr)
    }

    useEffect(() => {
        renderPosts()
    }, []);

    const formSubmit = async(ev) => {
        ev.preventDefault();
        if(!message.name) return alert("Você precisa inserir um nome!");
        if(!message.text) return alert("Você precisa inserir um texto!");

        if(inputRef.current.files.length !== 0 && ["image/png", "image/jpeg"].indexOf(inputRef.current.files[0].type) === -1) {
            return alert("A imagem precisa ser ou do tipo .png ou do tipo .jpeg/.jpg")
        }
        const now = new Date(Date.now()).toLocaleDateString("pt-br")
        const base64Image = inputRef.current.files.length !== 0 ? await convertImageToBase64(inputRef.current.files[0]) : ""
        const success = await handleSubmit({...message, image: base64Image, date: now, name: message.name + ` (${login.user})`}, login.user, login.senha)
        if(!success) return
        setMessage({})  
        location.reload()
    }

    return (
        <>
            <header>
                <h1 className="center">InSide.</h1>
            </header>
            <main>
                <div className='add-box'>
                    <button className="center" onClick={handleLoginBox}><img src={addButton} alt="adicionar post"/></button>
                    <div className="login-box" style={{display: style}}>
                        <form id="form" onSubmit={formSubmit}>
                            <ul>
                                <li>
                                    <h1>Titulo</h1>
                                    <input type="text" name="" id="" value={message.name} onChange={(e) => setMessage({...message, name: e.target.value})}/>
                                </li>
                                <li>
                                    <h1>Imagem</h1>
                                    <label htmlFor="image-upload" className="image-uploader">Escolher imagem ou arraste</label>
                                    <input type="file" id="image-upload" ref={inputRef} onChange={(e) => setMessage({...message, image: e.target.value})}/>
                                </li>
                                <li>
                                    <h1>Texto</h1>
                                    <textarea name="" id="" value={message.text} onChange={(e) => setMessage({...message, text: e.target.value})}></textarea>
                                    
                                </li>
                                <li>
                                    <h1>Localização (opcional)</h1>
                                    <textarea name="" id="" value={message.location} onChange={(e) => setMessage({...message, location: e.target.value})}></textarea>
                                </li>
                            </ul>
                            <div>
                                <input type="submit" value="Enviar Post" />
                                <div>
                                    <input type="text" placeholder="login" name="" id="" value={login.user} onChange={(e) => setLogin({...login, user: e.target.value})}/>
                                </div>
                                <div>
                                    <input type="text" placeholder="senha" name="" id="" value={login.senha} onChange={(e) => setLogin({...login, senha: e.target.value})}/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    {postsArray}
                </div>
                <button className="load-more-button" onClick={renderPosts}>Carregar mais </button>
            </main>
        </>
    )
}

/**
 * <Post title='User' image='' date='07/08/2024' />
                    <Post title='User' image='https://placehold.co/400x800' location="Aqui." date='07/08/2024' />
 */
export default App
