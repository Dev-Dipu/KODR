import React, { createContext, useState } from 'react'

const UserContext = createContext();


const UserContextProvider = ({children}) => {
  const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem("users")) || []);
	const [toggle, setToggle] = useState(false);

  
    
  return (
    <UserContext.Provider value={{users, setUsers, toggle, setToggle}}>{children}</UserContext.Provider>
  )
}

export {UserContext, UserContextProvider}