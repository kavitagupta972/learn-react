import React from 'react';
import {NavLink} from 'react-router-dom';
function Nav() {
    const navStyle = {
        color :'black'
    }
    return (
        <div className = "nav-container">
            <NavLink style = {navStyle} activeClassName="active" exact to="/">
            Home
            </NavLink>
            <NavLink style = {navStyle} activeClassName="active" to="/about-us">
            About Us
            </NavLink>
            <NavLink style = {navStyle} activeClassName="active" to="/contact-us">
            Contact Us
            </NavLink>
            <NavLink style = {navStyle} activeClassName="active" to="/login">
            Login
            </NavLink>
            <NavLink style = {navStyle} activeClassName="active" to="/register">
            Register
            </NavLink>
            <NavLink style = {navStyle} activeClassName="active" to="/contact-list">
            Contacts
            </NavLink>
            <NavLink style = {navStyle} activeClassName="active" to="/items">
            Items
            </NavLink>
        </div>
    );
}

export default Nav;