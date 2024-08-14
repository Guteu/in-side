import db from "../firebaseSetup";
import { setDoc, doc, getDoc } from "firebase/firestore";


async function handleSubmit(data) {
    const docRef = doc(db, "Posts", "Posts")
    const docSnap = await getDoc(docRef)
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
}

export default handleSubmit