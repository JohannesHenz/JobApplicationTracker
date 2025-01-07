import React from 'react';
import { Nav, NavLink, NavMenu } from "./NavbarElements.tsx";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" style={({ isActive }) => ({
                        color: isActive ? "#fd8c0b" : "#ffffff"
                    })}>
                        Home    
                    </NavLink>
                    <NavLink to="/about" style={({ isActive }) => ({
                        color: isActive ? "#fd8c0b" : "#ffffff"
                    })}>
                        About
                    </NavLink>
                    <NavLink to="/login" style={({ isActive }) => ({
                        color: isActive ? "#fd8c0b" : "#ffffff"
                    })}>
                        Login   
                    </NavLink>
                    <NavLink to="/sign-up" style={({ isActive }) => ({
                        color: isActive ? "#fd8c0b" : "#ffffff"
                    })}>
                        Sign Up
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
