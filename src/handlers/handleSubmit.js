import db from "../firebaseSetup";
import { setDoc, doc, getDoc } from "firebase/firestore";
import handleLogin from "./handleLogin";

async function handleSubmit(data, user, password) {
    const docRef = doc(db, "Posts", "Posts")
    const docSnap = await getDoc(docRef)
    if(await handleLogin(user, password) == false){
        alert("Login ou senha incorreto!")
        return false
    }
    if (docSnap.exists()){
        const docData = docSnap.data()
        const postId = docData.postsCount
        const updatedData = {
            ...docData,
            [postId]: data,
            postsCount: postId + 1
        }

        await setDoc(docRef, updatedData)
    }else{
        const newDocData = {
            0: data,
            postsCount: 1
        }
        await setDoc(docRef, newDocData)
    }
    return true
}

export default handleSubmit
