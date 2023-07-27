import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import { LayoutRoot } from './routes/LayoutRoot'
import { LandingPage } from "./routes/LandingPage"
import { LoginPage } from "./routes/LoginPage/LoginPage"
import { UserContextProvider } from "./hooks/useUserContext"

function App() {
  return (
    <Router>
        <UserContextProvider>
          <Routes>

            <Route path="/" element={<LayoutRoot />}>
              <Route index element={<LandingPage />} />
            </Route>

            <Route path="/login" element={<LoginPage />} />

          </Routes>
        </UserContextProvider>
      </Router>
  )
}

export default App