import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";
initializeAuthentication();

const useFirebase = ()=> {
    const [user, setUser] = useState({});

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInUsingGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user)
        })

    }

    useEffect(() =>{
        onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
        })
    },[]);

    const logout = () =>{
        signOut(auth)
        .then(() =>{ })
    }

    return{
        user,
        signInUsingGoogle,
        logout
    }
}
export default useFirebase;