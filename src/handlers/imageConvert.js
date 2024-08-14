/**
 * @param {File} file 
 */
async function convertImageToBase64(file) {
    if(file?.constructor !== File) throw "file não é um File!"
    return new Promise((resolve) => {
        const reader = new FileReader();
        
        reader.onload = () => {
            resolve(reader.result);
        };

        reader.readAsDataURL(file);
    });
}

export default convertImageToBase64