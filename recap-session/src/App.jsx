import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from 'react-router-dom'

import { UserContextProvider } from './hooks/UserContext'

import './index.css'
import './App.css'
import {ProductBrowser} from "./pages/ProductBrowser"
import {Cart} from "./pages/cart/Cart"

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Routes>

          <Route path='/' element={<ProductBrowser />} />
          <Route path='/cart' element={<Cart />} />

        </Routes>
      </Router>
    </UserContextProvider>
  )
}


export default App
