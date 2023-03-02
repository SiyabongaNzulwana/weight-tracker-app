import { createContext, useState } from 'react'

export const UserContext = createContext()

const UserContextProvider = (props) => {
  const [user, setUser] = useState({})

  const updateUser = (userObj) => {
    setUser(userObj)
  }
  return (
    <UserContext.Provider value={{ ...user, updateUser }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
