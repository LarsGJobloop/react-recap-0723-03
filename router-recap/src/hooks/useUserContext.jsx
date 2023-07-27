import { createContext, useContext, useState } from "react";
import { loginUser } from "../services/authenticate";

const userContext = createContext(null)

export function UserContextProvider({children}) {
  // State we need to keep track of
  const [user, setUser] = useState(null)
  const [inProgress, setInProgress] = useState(false)

  // State we can derive
  const isLoggedIn = user ? true : false

  async function logIn({name, password}) {
    // Check if user is logged in
    if (user) return

    // Await backend response
    setInProgress(true)
    const response = await loginUser(name, password)
    setInProgress(false)

    if (response.ok) {
      setUser({name})
      return true
    } else {
      console.warn("Login failed")
      return false
    }
  }

  function logOut() {
    if (!user) return

    console.log("logging out")

    setUser(null)
  }

  const context = {
    user,
    isLoggedIn,
    inProgress,
    logIn,
    logOut
  }

  return (
    <userContext.Provider value={context}>
      {children}
    </userContext.Provider>
  )
}

/**
 * @typedef {{name: string}} UserData
 */

/**
 * @typedef {{
 *  user: UserData,
 *  isLoggedIn: boolean,
 *  inProgress: boolean,
 *  logIn: ({name: string, password: string}) => void,
 *  logOut: () => void
 * }} UserContext
 */

/**
 * 
 * @returns {UserContext}
 */
export function useUserContext() {
  const user = useContext(userContext)

  if (!user) {
    throw new Error("useUserContext must be a child of a UserContextProvider")
  }

  return user
}