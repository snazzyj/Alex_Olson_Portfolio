import React, {Component} from 'react';
import Resume from '../assests/files/AlexOlsonResume.pdf';
import './footer.css'

class Footer extends Component {

    render() {
        return (
        <div className="contact">
            <a href="mailto:silentx.alex@gmail.com">
                <h4>Email Me</h4>
            </a>

            <a href="https://www.linkedin.com/in/alex-olson-60a6bb191/" target="_blank" rel="noopener noreferrer">
                <h4>LinkedIn</h4>
            </a>

            <a href="https://github.com/snazzyj" target="_blank" rel="noopener noreferrer">
                <h4>Github</h4>
            </a>

            <a href={Resume} target="_blank" rel="noopener noreferrer">
                <h4>Resume</h4>
            </a>
        </div>
        )
    }
}

export default Footer