import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const SignUpWithGoogle = () => {
    const navigate = useNavigate();

    function googleSignup() {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then(async (result) => {
                console.log(result); // Log the result of the signup
                alert('Signup Successful!');
                navigate('/projects'); // Redirect to dashboard after signup
            })
            .catch((error) => {
                console.error('Error during Google Signup:', error);
                alert('Signup failed. Please try again.');
            });
    }

    return (
        <div>
            <h1 className="font-sans text-gray-400 text-center pb-4">---- Or sign up with ----</h1>
            <button
                onClick={googleSignup}
                className="flex items-center justify-center w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            >
                <img
                    src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
                    alt="Google Icon"
                    className="w-6 h-6 mr-2"
                />
                <span className="text-sm font-medium text-gray-700">Sign up with Google</span>
            </button>
        </div>
    );
};

export default SignUpWithGoogle;
