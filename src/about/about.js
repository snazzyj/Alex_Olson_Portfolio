import React, { Component } from 'react';
import './about.css'

class About extends Component {
    render() {
        return (
            <section className="about" id="about">
                <h1>About</h1>
                <div className="missionStatement">
                    <p>
                    Web Developer skilled in Javascript and React. 
                    Proven track record in building strong client relations. 
                    Driven by collaborative environments that allow me to flex my creative problem skills coupled with a knack for critical thinking.
                    </p>
                </div>
                <div className="desc">
                    <p>
                        I am a Full Stack Web Developer living outside the Ann Arbor, MI area.
                        Developing, designing, implenting is my new passion in life where I can strive to create fun, interactive, engaging, and intuitive user experiences.
                        You can catch me munching on deep dish pizza (Chicago Style), playing video games or expanding on my knowledge.
                    </p>
                </div>
            </section>
        )
    }
}

export default About;