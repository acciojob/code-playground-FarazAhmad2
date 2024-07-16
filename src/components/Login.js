import React from 'react'

const Login = ({handleLogin, auth}) => {

  return (
    <div>
        <p>Login</p>
        <button style={{cursor:'pointer'}} onClick={handleLogin} type='button'>{!auth? 'Log In' : 'Log Out'}</button>
    </div>
  )
}

export default Login