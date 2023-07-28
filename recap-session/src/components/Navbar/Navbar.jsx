import { useUserContext } from "../../hooks/UserContext"

import style from './style.module.css'

export function Navbar() {
  return (
    <header className="">
        <h1>React Context</h1>

        <UserInfo />
    </header>
  )
}

function UserInfo() {
  const {user, isLoggedIn, signIn, signOut} = useUserContext()

  return (
    <div>
      {
        isLoggedIn
        ? <h2>{user.name}</h2>
        : <h2>Not logged in</h2>
      }
      {
        isLoggedIn
        ? <button onClick={signOut}>Sign Out</button>
        : <button onClick={signIn}>Sign In</button>
      }
    </div>
  )
}