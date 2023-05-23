import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";
import {Routes, Route, useNavigate} from 'react-router-dom';
import AboutUs from "../About-us/AboutUs";
import logo from "../../assests/images/green-logo.png"

const Header = () => {

  const navigate = useNavigate();

const navigateToAboutUs = () => {
  // navigate to /users
  navigate('/about-us');
};

const navigateToHome = () => {
  // navigate to /users
  navigate('/');
};

const navigateToLoginSignUp = () => {
  // navigate to /users
  navigate('/login-signup');
};

const navLinks = [
  {
    display: "Home",
    url: navigateToHome,
  },
  {
    display: "About",
    url: navigateToAboutUs,
  },

  {
    display: "Books",
    url: "#",
  },
  {
    display: "Courses",
    url: "#",
  },
  {
    display: "Blog",
    url: "#",
  },
];


  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <img src={logo}
               alt="ELibrary Logo" />
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <button className="nav__list-btn" onClick={item.url}>{item.display}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
              <button className="nav__list-btn" onClick={navigateToLoginSignUp}>Log In / Sign Up</button>
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
        <Routes>
                    <Route path="/about-us" element={<AboutUs/>} />
                    
                </Routes>
      </Container>
    </header>
    
  );
};

export default Header;
