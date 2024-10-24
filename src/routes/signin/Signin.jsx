import React from 'react'
import { SignIn } from '@clerk/clerk-react'
import './signin.css'

const Signin = () => {
  return (
    <div className='signIn'>
      <SignIn path="/sign-in" />
    </div>
  )
}

export default Signin
