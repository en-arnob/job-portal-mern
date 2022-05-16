import React from 'react'
import ProfilePage from '../ProfilePage'
import {Navigate} from 'react-router-dom'

const Profile = () => {
    const authToken = localStorage.getItem('myToken')
    if (authToken){
        return <ProfilePage/>
    }
  return (
    <Navigate to='/login' />
  )
}

export default Profile