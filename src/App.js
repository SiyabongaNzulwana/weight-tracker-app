import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserContextProvider from './contexts/UserContext'
import './App.css'
import { Home } from './pages/Home'
import { Progress } from './pages/Progress'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { SignOut } from './pages/SignOut'
import { NavBar } from '../src/components/Navbar/Index'
import { PrivateRoutes } from './utils/PrivateRoutes'

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <NavBar />
        <div className='App'>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route element={<Home />} path='/' exact />
              <Route element={<Home />} path='/home' />
              <Route element={<Progress />} path='/weight-history' />
            </Route>
            <Route element={<SignIn />} path='/login' exact />
            <Route element={<SignUp />} path='/sign_up' exact />
            <Route element={<SignOut />} path='/logout' exact />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App
