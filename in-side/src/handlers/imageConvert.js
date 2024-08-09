function handleImageToBase64(image) {
    return new Promise(res => {
        let reader = new FileReader()

        reader.readAsDataURL(image)

        reader.onload = function() {
            res(reader.result.replace("data:", "").replace(/^.+,/, ""));
        }
    })
}

export default handleImageToBase64