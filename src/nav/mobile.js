import React, { Component } from 'react';
import Resume from '../assests/files/AlexOlsonResume.pdf';
import { Menu } from '@material-ui/icons'
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
        const { isOpen } = this.state;

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

                <button className="menu" onClick={this.toggleNav}>
                    <Menu fontSize="larger" />
                </button>

                    <nav className={isOpen ? 'mobileNav show' : 'hide'}>
                        <a href="#about" onClick={this.closeNavBar}>About</a>
                        <a href="#projects" onClick={this.closeNavBar}>Projects</a>
                        <a href="#skills" onClick={this.closeNavBar}>Skills</a>
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

            </div>
        )
    }
}

export default Mobile