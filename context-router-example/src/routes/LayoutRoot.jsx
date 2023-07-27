import { Outlet, useNavigate } from "react-router-dom";

import style from './layout.module.css'
import { useUserContext } from "../hooks/useUserContext";

export function LayoutRoot() {
  const {user, isLoggedIn} = useUserContext()
  const navigate = useNavigate()

  function navigateToLoginPage() {
    navigate("/login") 
  }

  function navigateToLogOutPage() {
    navigate("/login")
  }

  return (
    <div className={style["App"]}>
      <header className={style["Navbar"]}>
        <h1>React Router Recap</h1>

        {
          isLoggedIn
          ?
          <div>
            <p>Logged in as: {user.name}</p>
            <button onClick={navigateToLogOutPage}>LogOut</button>
          </div>
          :
          <div>
          <button onClick={navigateToLoginPage}>Log In</button>
          </div>
        }
      </header>

      <main className={style["Main"]}>
        <Outlet />
      </main>

      <footer className={style["Footer"]}>
        <h2>&copy; Lars Gunnar</h2>
      </footer>
    </div>
  )
}