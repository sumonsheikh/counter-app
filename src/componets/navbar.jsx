import React, { Component } from 'react'

const NavBAr = ({totalCounters}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a href="#" className="navbar-brand">
            Navbar <span className="badge badge-pill badge-primary">
            {totalCounters}</span>
            </a>
        </nav>  
      );
}
 
export default NavBAr;


