import '../styles/Projects.css';
import { useRef } from 'react';
import { projectData } from '../data/projects.js';

function Projects() {
    const scrollRef = useRef(null);
    
    return (
        <section id="Projects">
            <h2>My Projects</h2>
            <p>Flip to see my projects</p>
        </section>
    )
}

export default Projects