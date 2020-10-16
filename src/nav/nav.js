import React, { Component } from 'react';
import Resume from '../assests/files/AlexOlsonResume.pdf';
import './nav.css';

class Nav extends Component {
    render() {
        return (
            <nav className="nav">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>

                    <a href="mailto:silentx.alex@gmail.com">
                    Email Me
                    </a>

                    <a href="https://www.linkedin.com/in/alex-olson-60a6bb191/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                    </a>

                    <a href="https://github.com/snazzyj" target="_blank" rel="noopener noreferrer">
                    Github
                    </a>

                    <a href={Resume} target="_blank" rel="noopener noreferrer">
                    Resume
                    </a>
            </nav>
        )
    }
}

export default Nav