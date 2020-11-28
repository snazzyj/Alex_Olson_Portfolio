import React, { Component } from 'react';
import TextLoop from 'react-text-loop';
import Typist from 'react-typist';
import Nav from '../nav/nav';
import Mobile from '../nav/mobile';
import Resume from '../assests/files/AlexOlsonResume.pdf';
import { Description, LinkedIn, Email, GitHub } from '@material-ui/icons';
import './header.css';

// headerList : ['Full Stack Developer', 'Life long learner', 'Gamer', 'Dog Dad', 'Pizza Connoisseur'],


class Header extends Component {

    render() {
        const { isMobile } = this.props;

        return (
            <header className="App-header">
                <Typist cursor={{element: ''}}>
                    <h1>Alex Olson</h1>
                    <h3>Full Stack Developer</h3>
                    <h3>Life long learner</h3>
                    <h3>Avid Gamer</h3>
                    <p>Creator of <em>things</em></p>
                </Typist>

                {isMobile ?
                    <Mobile />
                    :
                    <Nav />
                }

                <div className="social">
                    <a href="mailto:silentx.alex@gmail.com">
                        <Email fontSize="large" />
                    </a>

                    <a href="https://www.linkedin.com/in/alex-olson-60a6bb191/" target="_blank" rel="noopener noreferrer">
                        <LinkedIn fontSize="large" />
                    </a>

                    <a href="https://github.com/snazzyj" target="_blank" rel="noopener noreferrer">
                        <GitHub fontSize="large" />
                    </a>

                    <a href={Resume} target="_blank" rel="noopener noreferrer">
                        <Description fontSize="large" />
                    </a>
                </div>
            </header>
        )
    }
}

export default Header