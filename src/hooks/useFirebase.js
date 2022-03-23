/* initial firebase */
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2';
import { saveUser } from "../features/authSlice";
import firebaseConfig from '../Firebase/Firebase.config';

initializeApp(firebaseConfig);

const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const user = useSelector((state) => state.auth.auth);
    const dispatch = useDispatch();

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, navigate, photoURL) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const user = userCredential.user;
                console.log("Registered user: ", user);
                incertUser(email, name, photoURL, 'POST');
                dispatch(saveUser(user));
                localStorage.setItem('user', JSON.stringify(user))
                if (user.uid) {
                    Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Registered SuccessFully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                }
                /* send name to firebase after creation */
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photoURL
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
                dispatch(saveUser(user));
                if (user.uid) {
                    Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Logged in SuccessFully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                }
                const destination = location?.state?.from || '/';
                navigate(destination);
                localStorage.setItem('user', JSON.stringify(user))
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    // const handleReset = (email) => {
    //     sendPasswordResetEmail(auth, email)
    //     .then(() => {
    //         console.log("success");
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         console.log("An error has occured: ", errorCode, errorMessage);
    //     });
    // };

    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                incertUser(user.email, user.displayName, user.photoURL, 'PUT');
                setAuthError('');
                dispatch(saveUser(user));
                if (user.uid) {
                    Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Logged in SuccessFully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                }
                const destination = location?.state?.from || '/';
                navigate(destination);
                localStorage.setItem('user', JSON.stringify(user))
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // /* observer user state */
    // useEffect(() => {
    //     const unsubscribed = onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //           dispatch(saveUser(user)); 
    //         } else {
    //           dispatch(saveUser(null));
    //         }
    //         setIsLoading(false);
    //     });
    //     return () => unsubscribed;
    // }, [auth, dispatch])

    // const logout = () => {
    //     setIsLoading(true);
    //     signOut(auth).then(() => {
    //     }).catch((error) =>
    //     {
    //         console.log("error", error);
    //     })
    //         .finally(() => setIsLoading(false));
    // }

    const incertUser = (email, displayName, photoURL, method) => {
        const user = { email, displayName, photoURL, role: "user" };
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
        // handleReset,
        registerUser,
        loginUser,
        signInWithGoogle,
        // logout,
    }
}
export default useFirebase;