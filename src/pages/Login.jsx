import React from 'react'
import LoginForm from '../components/LogInScreenComp/LoginForm'
import LoginFooter from '../components/LogInScreenComp/LoginFooter'

const Login = () => {
  return (
    <div className='h-full w-full bg-white'>
    <LoginForm/>
    <div className='pt-20'>
    <LoginFooter/>
    </div>
    </div>
  )
}

export default Login