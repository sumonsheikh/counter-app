import React, { Component } from 'react'

const NavBAr = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a href="#" className="navbar-brand">
            Navbar <span className="badge badge-pill badge-primary">
            {props.totalCounters}</span>
            </a>
        </nav>  
      );
}
 
export default NavBAr;


