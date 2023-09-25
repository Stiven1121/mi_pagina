import React from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";

import appTareaLogo from '../images/logo.jpg'



const NavBar = () => {
  return (
<>   
  <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img src="appTareaLogo" width="30" height="30" class="d-inline-block align-top" alt="" />
        Tareas.com</a>
  </nav>
</> 
  )
}

export default NavBar;