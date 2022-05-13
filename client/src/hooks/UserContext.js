import React, {useState, createContext} from 'react'

export const UserContext = createContext()

export const UserProvider = props => {
    const [user, setUser] = useState({

        
    })
  return (
    <UserContext.Provider value={'hello'}>
        {props.children}
    </UserContext.Provider>
  )
}

