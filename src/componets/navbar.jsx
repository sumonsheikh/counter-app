import React, { Component } from 'react'


export default class NavBar extends Component {
    render() {
        return (
          <nav className="navbar navbar-light bg-light">
              <a href="#" className="navbar-brand">
        Navbar <span className="badge badge-pill badge-primary">{this.props.totalCounters}</span>
              </a>
          </nav>  
        );
    }
}

