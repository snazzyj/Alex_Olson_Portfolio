import React, { Component } from 'react';
import Nav from '../nav/nav';
import Mobile from '../nav/mobile';
import './header.css'

class Header extends Component {
    render() {
        const {isMobile} = this.props;
        return (
        <header className="App-header">
            <h1>Alex Olson</h1>
            <h3>Full Stack Developer</h3>
            {isMobile ? 
            <Mobile />
            :
            <Nav />
            }
        </header>
        )
    }
}

export default Header