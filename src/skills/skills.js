import React, { Component } from 'react';
import {frontend, backend, other} from './skillIcons';
import './skills.css'

class Skills extends Component {
    render() {
        return (
            <section className="skills" id="skills">
                <h1>Skills</h1>
                <div className="frontend">
                    <h3>Frontend</h3>
                    {frontend.map((icon, index) => {
                        return (
                            <div key={index}>
                                <img src={icon.icon} alt={icon.alt} className="icons"/>
                                <p>{icon.alt}</p>
                            </div>
                        )
                    })}
                </div>

                <div className="backend">
                    <h3>Backend</h3>
                    {backend.map((icon, index) => {
                        return (
                            <div key={index}>
                                <img src={icon.icon} alt={icon.alt} className="icons" />
                                <p>{icon.alt}</p>
                            </div>
                        )
                    })}
                </div>

                <div className="other">
                    <h3>Dev Tools</h3>
                    {other.map((icon, index) => {
                        return (
                            <div key={index}>
                                <img src={icon.icon} alt={icon.alt} className="icons" />
                                <p>{icon.alt}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        )
    }
}

export default Skills