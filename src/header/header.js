import React, { Component } from 'react';
import './header.css'

class Header extends Component {
    render() {
        return (
        <header className="App-header">
            <h1>Alex Olson</h1>
            <h3>Full Stack Developer</h3>

            <nav>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
            </nav>
        </header>
        )
    }
}

export default Header