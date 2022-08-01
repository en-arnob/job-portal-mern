import React, {useState, createContext} from 'react'
import jwt_decode from "jwt-decode";

export const UsersContext = createContext()


 

//TODO: Later on user state should not contain password. so have to make change in api so that it does not return user object containing password ::arnob:: DONE <//

export const UserProvider = props => {
  const token = localStorage.getItem('myToken')
  let usr = {}
  if(token){
    const decoded = jwt_decode(token)
    usr = decoded.user
  } else {
    usr = {}
  }
  
    const [user, setUser] = useState(usr)
    


  return (
    <UsersContext.Provider value={[user, setUser]}>
        {props.children}
    </UsersContext.Provider>
  )
}

