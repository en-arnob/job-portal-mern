
//// deprecated from react-router-dom v.6
//// kept this file cause it took a large amount of time to understand the error :') ::arnob:: 




import React from 'react'
import {Navigate, Route} from 'react-router-dom'

const ProtectedRoutes = ({component: Component, ...rest }) => {
  return (
    <Route
    {...rest}
    render={
        (props)=>
            localStorage.getItem('myToken') ? (
                <Component {...props} />
            ) : (
                <Navigate to='/login' />
            )
        
    }
    />
  )
}

export default ProtectedRoutes