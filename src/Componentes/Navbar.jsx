import React, { useState } from "react";
import { Button } from "bootstrap";
import Logo from '../assets/logo_legalify_azul_transparente.png'


function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav position-fixed" >
      <a><img src={Logo} alt="Logo" /></a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Servicios
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
           Nosotros
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Blog
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Contacto
          </a>
        </li>
      </ul>
      <div className="grupo3Nav">
      <a className="registrarse" href="https://login.legalify.app/login" src={Button}>Registrarse</a>
      <a className="registrarse" href="https://login.legalify.app/login" src={Button}>Inicia Sesion</a> 
    
      
      </div>    

      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;