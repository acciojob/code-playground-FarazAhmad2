import { Navigate } from 'react-router-dom'
import React from 'react'

const PrivateRoute = ({children, auth}) => {

  return (
    <div>
        {auth ? children :
        <Navigate to="/login" />}
    </div>
  )
}

export default PrivateRoute