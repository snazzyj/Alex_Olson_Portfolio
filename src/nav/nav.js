import React, { Component, Fragment } from 'react';
import './nav.css';

class Nav extends Component {
    render() {
        return (
            <Fragment>
            <nav className="nav">
                <div>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                </div>
            </nav>
            </Fragment>
        )
    }
}

export default Nav