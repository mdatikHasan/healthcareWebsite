import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";
initializeAuthentication();

const useFirebase = ()=> {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] =  useState(true);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInUsingGoogle = () =>{
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
        .finally(() => setIsLoading(false))

    }

    useEffect(() =>{
        const usSubscribed = onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
        return () => usSubscribed;
    },[]);

    const logout = () =>{
        setIsLoading(true)
        signOut(auth)
        .then(() =>{ })
        .finally (() => setIsLoading(false))
    }

    return{
        user,
        isLoading,
        signInUsingGoogle,
        logout
    }
}
export default useFirebase;