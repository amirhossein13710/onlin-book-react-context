import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
// import { Navigate } from "react-router-dom";
const Navbar = () => {
  const [menu,setMenu] = useState(false)
  return (
    <nav className="navbar">
      <div className="container">
        <NavLink className="toggle-menu" to="/menu" onClick={()=> setMenu(!menu)}>
          {
            menu ? <FaTimes/>:<FaBars/>
          }
        </NavLink>
        <ul className="nav-list">
          <NavLink className="nav-item" to="/">خانه</NavLink>
          <NavLink className="nav-item" to="/product">محصولات</NavLink>
          <NavLink className="nav-item" to="/your-library">کتابخانه شما</NavLink>
          <NavLink className="nav-item" to="/login">ورود</NavLink>
          <NavLink className="nav-item" to="/register">ثبت نام</NavLink>
        </ul>
        <div className="logo">
          <NavLink className="logo-item" to="/">آنلاین بوک حسین</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
