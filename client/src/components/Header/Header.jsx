import React, { useState } from 'react'
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi'
import { Link, NavLink } from 'react-router-dom'
import  OutsideClickHandler  from "react-outside-click-handler"
// import useHeaderColor from "../../hooks/UseHeaderColor"
import { useAuth0 } from '@auth0/auth0-react'

const Header = () => {
  
  const [menuOpened, setMenuOpened] = useState(false); /* toggle menu to open or close */
  // const headerColor = useHeaderColor()
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return {right: !menuOpened && "-100%"}
    }
  }
  const {loginWithRedirect} = useAuth0()
  
  return (
    <section className='h-wrapper'>

            <div className="paddings innerWidth h-container">
                <Link to="/">
                  <img src="./logo.png" alt="logo" width={100}/>
                </Link>

                <OutsideClickHandler onOutsideClick={() => {setMenuOpened(false)}}>
                  <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                    <NavLink to="/properties">Properties</NavLink>
                        
                    <a href="mailto:kevinandris27@gmail.com">Contact</a>

                    {/* LOGIN BUTTON */}
                    <button className='button' onClick={loginWithRedirect}>
                      Login
                    </button>
                    
                  </div>
                </OutsideClickHandler>
                
                {/* for medium and small screens */}
              <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
                <BiMenuAltRight size={30} />
              </div>
            </div>

    </section>
  )
}

export default Header