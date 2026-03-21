import '../styles/Projects.css';
import { useRef } from 'react';
import { projectData } from '../data/projects.js';
import Button from '../components/Button.jsx'

function Projects() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const current = scrollRef.current;
        const card = current.querySelector(".project-card");
        const cardWidth = card.offsetWidth;
        const gap = 24;

        current.scrollBy({
            left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap,
            behavior: "smooth",
        });
    }
    
    return (
        <section id="Projects">
            <h2>My Projects</h2>
            <p>For more information, can find in my github</p>

            <div className="wheel-wrapper">
            <Button variant="primary" className="arrow back" onClick={() => scroll("left")}>
                <span className="arrow-symbol">←</span>
            </Button>

                <div className="wheel" ref={scrollRef}>
                    {projectData.map((project) => (
                    <div key={project.id} className="project-card">
                        <img src={project.gif} alt={project.title} width="500px"/>
                        <div className="card-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
                </div>

                <Button variant="primary" className="arrow forward" onClick={() => scroll("right")}>
                    <span className="arrow-symbol">→</span>
                </Button>
            </div>
        </section>
    )
}

export default Projects