import React, { Component } from 'react';
import './nav.css';

class Mobile extends Component {

    container = React.createRef()
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    toggleNav = () => {
        const {isOpen} = this.state;

        this.setState({
            isOpen: !isOpen
        })
    }

    closeNavBar = () => {
        this.setState({
            isOpen: false
        })
    }

    handleClickOutside = (event) => {
        if (this.container.current && !this.container.current.contains(event.target)) {
            this.setState({
                isOpen: false
            })
        }
    }
    render() {
        const { isOpen } = this.state;
        return (
            <div className="container" ref={this.container}>
                {/* <button className="burger-menu" onClick={this.toggleNav}>
                    <div className="bar1" />
                    <div className="bar2" />
                    <div className="bar3" />
                </button> */}

                <button className="menu" onClick={this.toggleNav}>
                    Menu
                </button>

                {isOpen && (
                    <nav className="mobileNav">
                        <a href="#about" onClick={this.closeNavBar}>About</a>
                        <a href="#projects" onClick={this.closeNavBar}>Projects</a>
                        <a href="#skills" onClick={this.closeNavBar}>Skills</a>
                    </nav>
                )}
            </div>
        )
    }
}

export default Mobile