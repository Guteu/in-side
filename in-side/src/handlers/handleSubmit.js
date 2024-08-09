import db from "../firebaseSetup";
import { setDoc, doc, getDoc } from "firebase/firestore";


async function handleSubmit(name, data, location, text, image) {
    const docRef = doc(db, "Posts", "Posts")
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()){
        const docData = docSnap.data()
        const postId = docData.postsCount
        const updatedData = {
            ...docData,
            [postId]: {name: name, data: data, location: location, text: text, image:image},
            postsCount: postId + 1
        }

        await setDoc(docRef, updatedData)
    }else{
        const newDocData = {
            0: {name: name, data: data, location: location, text: text, image:image},
            postsCount: 1
        }
        await setDoc(docRef, newDocData)
    }
}

export default handleSubmit