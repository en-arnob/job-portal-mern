import React, {useState, createContext} from 'react'

export const UsersContext = createContext()


 

//TODO: Later on user state should not contain password. so have to make change in api so that it does not return user object containing password ::arnob::

export const UserProvider = props => {
    const [user, setUser] = useState({})
  return (
    <UsersContext.Provider value={[user, setUser]}>
        {props.children}
    </UsersContext.Provider>
  )
}

