import React, { Component } from 'react';
import {frontend, backend, other} from './skillIcons';
import './skills.css'

class Skills extends Component {
    render() {
        return (
            <section className="skills" id="skills">
                <h1>Skills</h1>
                <div className="frontend">
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