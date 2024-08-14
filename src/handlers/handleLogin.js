import db from "../firebaseSetup";
import { doc, getDoc } from "firebase/firestore";

async function handleLogin(user, password) {
    const docRef = doc(db, "Users", "users")
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()){
        console.log(user, password, docSnap.data())
        if (typeof docSnap.data()[user] != "undefined"){
            if (docSnap.data()[user] == password){
                return true
            }
        }
    }
    return false
}

export default handleLogin