import React, {Component} from 'react';
import IZRG from '../assests/screenshots/home.png';
import FFXIV from '../assests/screenshots/mainCharacter.png';
import SecretSanta from '../assests/screenshots/secretsantaprofile.png';
import OmZone from '../assests/screenshots/timer.png';
import './projects.css'

const projects = [
    {
        id: 1,
        name: 'Infinite Zen Room Grooming',
        description: 'Infinite Zen Grooming strives for the most relaxing, calming and loving way to take care of your fur babies needs while ensuring you that we are the best choice for your pet.',
        tech: 'React, CSS, Javascript, EmailJs',
        github: 'https://github.com/snazzyj/InfiniteZenRoomGrooming',
        demo: 'https://izrgrooming.com/',
        image: IZRG,
        altText: 'Landing page to izrgrooming.com'
    },
    {
        id: 2,
        name: 'XIV Character Tracker',
        description: `Final Fantasy XIV Character Tracker was designed for players to view thier active character class, stats, gear equipped, glamours and track their minions and mounts.`,
        tech: 'HTML, CSS, Javascript, jQuery',
        github: 'https://github.com/snazzyj/xivcharactertracker',
        demo: 'https://snazzyj.github.io/xivcharactertracker/',
        image: FFXIV,
        altText: 'Character Page for XIV Character Tracker'
    },
    {
        id: 3,
        name: 'Secret Santa',
        description: 'Doing secret santa has never been easier. This web application will automatically pair everyone up, send a confirmation email where they can verify their status within the pool. Users can also set up a profile where they can add interests, track who their partner is and view each pool if they created one',
        tech: 'Javascript, React, NodeJs, Express, CSS',
        github: 'https://github.com/snazzyj/SecretSanta',
        demo: 'https://secretsanta.snazzyj.now.sh/',
        image: SecretSanta,
        altText: 'Profile page for Secret Santa'
    },
    {
        id: 4,
        name: 'Om Zone',
        description: 'Meditation tracker that includes a sound cue, background image if the user wants one. Each background image has an associated track to help relax the person.',
        tech: 'Javascript, React, NodeJs, Express, CSS',
        github: 'https://github.com/snazzyj/OmZone',
        demo: 'https://omzone.snazzyj.now.sh/',
        image: OmZone,
        altText: 'Main page showing the Countdown Timer'
    }
]


class Projects extends Component {
    renderProjects = () => {
        return projects.map(project => {
            return (
                <div key={project.id} className="project">
                    <h1 className="projectName">{project.name}</h1>
                    <img src={project.image} className="projectImage" alt={project.altText}/>
                    <p className="projectDesc">{project.description}</p>
                    <p className="projectTech">Tech : {project.tech}</p>

                    <div className="projectLinks">
                        <a href={project.github} className="gitHubLink" target="_blank" rel="noopener noreferrer">Github</a>
                        <a href={project.demo} className="demoLink" target="_blank" rel="noopener noreferrer">Demo</a>
                    </div>
                </div>
            )
        })
    }

    render() {     
        return (
            <section className="projects" id="projects">
                <h1>Projects</h1>
                {this.renderProjects()}
            </section>
        )
    }
}

export default Projects