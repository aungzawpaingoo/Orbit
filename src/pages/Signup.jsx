// import React, { useState } from 'react';
// import SignUpFooter from '../components/SignUpScreenComp/SignUpFooter';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase';
// import { useNavigate } from 'react-router-dom';
// import SignUpWithGoogle from '../components/SignUpWithGoogle'

// const Signup = () => {
//   // Individual states for each input field
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // console.log('Email:', email);
//     // console.log('Password:', password);
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       const user = auth.currentUser;
//       //console.log(user);
//       alert('User Registered Successfully!');
//       setEmail('');
//       setPassword('');
//       navigate('/logIn');
//     } catch (error) {
//       alert(error.message)
//     }

//   };

//   return (
//     <div className='h-full w-full bg-white'>
//       <div>
//         <section className="text-gray-600 body-font">
//           <div className="container px-5 py-2 mx-auto">
//             <div className="flex flex-col text-center w-full mb-2">
//               <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
//               <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
//               <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
//                 Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.
//               </p>
//             </div>
//           </div>
//         </section>
//         <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
//           <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//             <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
//               Sign up your account
//             </h2>
//           </div>

//           <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
//                   Email address
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     required
//                     autoComplete="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <div className="flex items-center justify-between">
//                   <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
//                     Password
//                   </label>

//                 </div>
//                 <div className="mt-2">
//                   <input
//                     id="password"
//                     name="password"
//                     type="password"
//                     required
//                     autoComplete="current-password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <button
//                   type="submit"
//                   className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1 text-sm/6 font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
//                 >
//                   Sign up
//                 </button>
//               </div>
//               <SignUpWithGoogle/>
//             </form>

//             <p className="mt-10 text-center text-sm/6 text-gray-500">
//               Not a member?{' '}
//               <a href="#" className="font-semibold text-blue-500 hover:text-blue-500">
//                 Start a 14 day free trial
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//       <SignUpFooter />
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from 'react';
import SignUpFooter from '../components/SignUpScreenComp/SignUpFooter';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import SignUpWithGoogle from '../components/SignUpWithGoogle'

const Signup = () => {
  // Individual states for each input field
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('Email:', email);
    // console.log('Password:', password);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      
      await sendEmailVerification(user);
      alert('Signup successful! Please check your email to verify your account before login.')


      setEmail('');
      setPassword('');
      navigate('/logIn');
    } catch (error) {
      alert(error.message)
    }

  };

  return (
    <div className='h-full w-full bg-white'>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-2 mx-auto">
            <div className="flex flex-col text-center w-full mb-2">
              
              <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900">Get Started With Orbit</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Using a work email helps find teammates and boost collaboration.
              </p>
            </div>
          </div>
        </section>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-1 text-center text-xl/9 font-bold tracking-tight text-gray-900">
              Sign up your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                    Password
                  </label>

                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1 text-sm/6 font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                >
                  Sign up
                </button>
              </div>
              <SignUpWithGoogle/>
            </form>

            <div className="mt-10 text-center text-sm text-gray-500 justify-center">
  <label className="flex items-center space-x-2 justify-center">
    <input type="checkbox" className="form-checkbox text-blue-500" />
    <span>
      I agree to the{' '}
      <a href="#" className="font-semibold text-blue-500 hover:text-blue-700">
        Terms of Service
      </a>{' '}
      and{' '}
      <a href="#" className="font-semibold text-blue-500 hover:text-blue-700">
        Privacy Policy
      </a>.
    </span>
  </label>
</div>

          </div>
        </div>
      </div>
      {/* <SignUpFooter /> */}
    </div>
  );
};

export default Signup;
