import { useLocation } from 'react-router-dom'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavElements'
import Image from './../../logo.svg'

export const NavBar = () => {
  const location = useLocation()

  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={Image} alt='' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/home'>Home</NavLink>
          <NavLink to='/weight-history'>Progress</NavLink>
        </NavMenu>
        <NavBtn>
          {location.pathname === '/login' ? (
            <NavBtnLink to='/sign_up'> Sign Up</NavBtnLink>
          ) : location.pathname === '/sign_up' ? (
            <NavBtnLink to='/login'> Sign In</NavBtnLink>
          ) : (
            <NavBtnLink to='/logout'> Sign Out</NavBtnLink>
          )}
        </NavBtn>
      </Nav>
    </>
  )
}
