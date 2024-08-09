import handleImageToBase64 from "../../handlers/imageConvert"

function Submit() {
    return(
        <div>
            <input type="file" name="" id="fileInput"></input>
            <button onClick={
                (async () => {
                    const file = document.getElementById("fileInput")['files'][0]
                    if(!file) return alert("Insira uma imagem primeiro!!!!!")
                    const base64 = await handleImageToBase64(file)
                    console.log(base64)
                })
            }>submit</button>
        </div>
    )
}


//https://sentry.io/answers/how-do-i-display-a-base64-image-in-html/
export default Submit