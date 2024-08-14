import db from "../firebaseSetup"
import { doc, getDoc } from "firebase/firestore"

async function handleMessages(){
    const docRef = doc(db, "Posts", "Posts")
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()){
        const messages = docSnap.data()
        return messages
    }
}

export default handleMessages