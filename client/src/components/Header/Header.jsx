import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
// import useHeaderColor from "../../hooks/UseHeaderColor"
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import AddPropertyModal from "../AddPropertyModal/AddPropertyModal";
import useAuthCheck from "../../hooks/useAuthCheck";
import { FaGripfire } from "react-icons/fa";


const Header = () => {
  const [menuOpened, setMenuOpened] =
    useState(false); /* toggle menu to open or close */
  // const headerColor = useHeaderColor()

  const [modalOpened, setModalOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  const { validateLogin } = useAuthCheck();
  const handleAddPropertyClick = () => {
    if (validateLogin()) {
      setModalOpened(true);
    }
  };

  return (
    <section className="h-wrapper">
      <div className="paddings innerWidth h-container">
        <Link to="/" className="linkTitle">
          <FaGripfire color="orange" size={25} />
          <h3 className="keipyTitle">
            <span>The</span>&nbsp;Keipy <span>Estate</span>
          </h3>
        </Link>

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <NavLink to="/properties">Properties</NavLink>

            <a href="mailto:kevinandris27@gmail.com">Contact</a>

            {/* // ! ADD property button */}
            <div onClick={handleAddPropertyClick}>Add Property</div>

            <AddPropertyModal opened={modalOpened} setOpened={setModalOpened} />

            {/* LOGIN BUTTON */}
            {!isAuthenticated ? (
              <button className="button" onClick={loginWithRedirect}>
                Login
              </button>
            ) : (
              <ProfileMenu user={user} logout={logout} />
            )}
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
