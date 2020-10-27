import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
    render() {
        return (
            <nav className="nav">
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
            </nav>
        )
    }
}

export default Nav