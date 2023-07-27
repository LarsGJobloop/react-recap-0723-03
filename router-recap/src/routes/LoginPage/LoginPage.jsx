import { useState } from "react"
import { useUserContext } from "../../hooks/useUserContext"
import { useNavigate } from "react-router-dom"


import style from "./style.module.css"

export function LoginPage() {
  const [formData, setFormData] = useState({name: "", password: ""})
  const { user, isLoggedIn, logIn, logOut } = useUserContext()
  const navigate = useNavigate();

  function updateForm(event) {
    const key = event.target.name
    const value = event.target.value

    setFormData(oldData => {
      return {
        ...oldData,
        [key]: value,
      }
    })
  }

  function signIn() {
    logIn(formData)
    setFormData({name: "", password: ""})

    navigate("/")
  }

  if (isLoggedIn) {
    return (
      <div className={style["page"]}>
        <h1>User Logged In</h1>
        <h2>Log out?</h2>

        <button onClick={logOut}>Logout</button>
      </div>
    )
  } else {
    return (
      <div className={style["page"]}>
        <h1>Login</h1>
        <form onSubmit={signIn} onChange={updateForm} className={style["form"]}>
          <label htmlFor="name">User Name</label>
          <input type="text" name="name" />
  
          <label htmlFor="password">Password</label>
          <input type="text" name="password" />
  
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }

}