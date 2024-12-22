import React from 'react'
import SignUpForm from '../components/SignUpScreenComp/SignUpForm'
import SignUpFooter from '../components/SignUpScreenComp/SignUpFooter'

const Signup = () => {
  return (
    <div className='h-full w-full bg-white'>
      <SignUpForm/>
      <SignUpFooter/>
    </div>
  )
}

export default Signup