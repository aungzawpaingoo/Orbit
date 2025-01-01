import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth';
import React, { useContext } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import {UserContext} from '../data/Context/UserContext'


const LoginWithGoogle = () => {
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext);

    function googleLogin() {
        const provider = new GoogleAuthProvider();

        
        // signInWithPopup(auth, provider)
        //     .then(async (result) => {
        //         const user = result.user;
        //         setUser({
        //             displayName: user.displayName,
        //             email: user.email,
        //             photoURL: user.photoURL,
        //         });
        //         alert('Login Successful')
        //         navigate('/projects');
        //     })
        //     .catch((error) => {
        //         console.error('Error during Google Login:', error);
        //         alert('Login failed. Please try again.');
        //     });

        signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user;
        //console.log('Logged-in user:', user);
        setUser({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
        });
        alert('Login Successful');
        navigate('/projects');
    })
    .catch((error) => {
        //console.error('Error during Google Login:', error);
        alert('Login failed. Please try again.');
    });
    }

    return (
        <div>
            <h1 className="font-sans text-gray-400 text-center pb-4">---- Or continue with ----</h1>
            <button
                onClick={googleLogin}
                className="flex items-center justify-center w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            >
                <img
                    src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
                    alt="Google Icon"
                    className="w-6 h-6 mr-2"
                />
                <span className="text-sm font-medium text-gray-700">Sign in with Google</span>
            </button>
        </div>
    );
};

export default LoginWithGoogle;

