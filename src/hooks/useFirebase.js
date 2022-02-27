import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, signOut, sendPasswordResetEmail } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { saveUser } from "../features/authSlice";

// initial firebase
import { initializeApp } from "firebase/app";
import firebaseConfig from '../Firebase/Firebase.config';

initializeApp(firebaseConfig);

const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const user = useSelector((state) => state.auth.value);
    console.log("user from state", user);
    const dispatch = useDispatch();

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const user = userCredential.user;
                console.log("Registered user: ", user);
                incertUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                navigate('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Singed in user: ", user);
                const destination = location?.state?.from || '/';
                navigate(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    const handleReset = (email) => {
        sendPasswordResetEmail(auth, email)
        .then(() => {
            console.log("success");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("An error has occured: ", errorCode, errorMessage);
        });
    };

    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                incertUser(user.email, user.displayName, 'PUT');
                setAuthError('');
                const destination = location?.state?.from || '/';
                navigate(destination);
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
              dispatch(saveUser(user));
            } else {
              dispatch(saveUser(undefined));
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth, dispatch])

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            console.log("error", error);
        })
            .finally(() => setIsLoading(false));
    }

    const incertUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://shrouded-headland-44423.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        isLoading,
        authError,
        handleReset,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout,
    }
}
export default useFirebase;