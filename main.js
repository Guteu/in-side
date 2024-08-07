import db from "./firebaseSetup.js"
import { doc, setDoc, collection, getDocs } from "firebase/firestore"

async function getMessages() {
    const messagesCollection = collection(db, "messages")
    const allDocs = await getDocs(messagesCollection)
    console.log(allDocs)
}

