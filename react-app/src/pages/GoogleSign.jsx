import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getAuth } from 'firebase/auth';

const GoogleSign = () => {

    const GoogleSign = async () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
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



    return (
        <div className='text-center text-3xl font-bold h-screen py-8'>
            <h1 className='text-4xl text-green-600 py-10 '>Google Sign in</h1>
            <button onClick={GoogleSign} className='text-3xl border border-blue text-green-600 py-10 '>Google Sign in</button>

            
        </div>
    );
};

export default GoogleSign;