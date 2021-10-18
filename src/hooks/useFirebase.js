import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';
// import { useHistory, useLocation } from 'react-router';


initializeAuthentication();

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogIn, setIsLogIn] = useState(false);
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    // const location = useLocation();
    // const history = useHistory();
    // const redirect_uri = location.state?.from || "/home";
    // console.log(location.state?.from);


    const auth = getAuth();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // const loggedToUser = {
                //     name: displayName,
                //     email: email,
                //     photo: photoURL
                // }
                setUser(user);
                // ...
                console.log(user);
                // history.push(redirect_uri);
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }


    //observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                // const uid = user.uid;
                // ...
                setUser(user);
            } else {
                // User is signed out
                // ...
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])


    // sign out
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
        }).catch((error) => {
            // An error happened.
        });
    };

    // email login part
    const toggleLogin = e => {
        setIsLogIn(e.target.checked);
    }

    const handleRegistration = e => {
        console.log("registration done");
        e.preventDefault();
        console.log(email, password);
        // if (/(?=.*[a-z])/.test(password)) {
        //   setError("should contain at least one lower case")
        //   return;
        // }
        isLogIn ? processLogin(email, password) : createNewUser(email, password)
    };

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log(user);
                setError('');
                setUserName();
                // history.push(redirect_uri);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then((result) => {
                // Email verification sent!
                // ...
                console.log(result)
            });
    }

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();
                // history.push(redirect_uri);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                setError(errorMessage);
            });
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
    }
    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
        console.log(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
        console.log(e.target.value);
    }
    return {
        user,
        isLoading,
        handleGoogleSignIn,
        isLogIn,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        toggleLogin,
        error,
        handleRegistration,
        handleResetPassword,
        handleSignOut
    };
};

export default useFirebase;