import { useState } from "react";
import { createContext, useContext } from "react";
import { authenticateUser } from "../backend/authenticateUser";

const userContext = createContext()

export function UserContextProvider(props) {
  const {children} = props
  const [user, setUser] = useState(null)

  // Derived state
  const isLoggedIn = user ? true : false

  async function signIn(userData) {
    console.log("Signing in as Lars")

    const response = await authenticateUser(userData)

    if (!response.ok) {
      // Handle failed authentication
      return
    }

    setUser({name: "Lars"})
  }

  async function signOut() {
    console.log("Signing out")

    setUser(null)
  }

  const value = {
    user,
    isLoggedIn,
    signIn,
    signOut
  }

  return (
    <userContext.Provider value={value}>
      {children}
    </userContext.Provider>
  )
}

/**
 * @returns {{
 *    user: {name: string},
 *    isLoggedIn: boolean,
 *    signIn: () => void,
 *    signOut: () => void,
 *  }}
 */
export function useUserContext() {
  const user = useContext(userContext)

  return user
}