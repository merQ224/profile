import '../styles/About.css'
import AboutImage from '../assets/butterfly.jpeg'

function About() {
    return (
        <section id="About">
            <div className="About_header">
                <h2>About Me</h2>
                <p> Hey, I’m Winston 👋🏽 </p>
            </div>
            <div className="About_content">
                <img src={AboutImage} alt="Winston Naidu"/>
                <p className="About_text_1">
                    I’m a developer who enjoys turning ideas into clean, functional, and well-structured applications.
                    I like working across the stack, building responsive frontends and thinking through backend architecture and system design.
                </p>
                <p className="About_text_2">
                    I’m big on writing code that’s readable, maintainable, and built with intention.
                    I’m always learning, always improving, and always looking for better ways to solve problems.
                </p>
            </div>
        </section>
    )
}

export default About