import './App.css'
import { useUserContext, UserContextProvider } from './hooks/UserContext'

function App() {
  return (
    <UserContextProvider>
      <header>
        <h1>React Context</h1>

        <UserInfo />
      </header>
    </UserContextProvider>
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

export default App
