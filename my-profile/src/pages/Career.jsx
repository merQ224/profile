import { useState    } from 'react';
import { careerData } from '../data/career.js'
import Button from '../components/Button.jsx'
import '../styles/Career.css'

function Career() {
    const [selectedRole, setSelectedRole] = useState(careerData[5]);

    const getDurationLabel = (startStr, endStr) => {
        const start = new Date(startStr);
        const end = new Date(endStr);

        const diffMs = end - start;
        const diffMonths = diffMs / (1000 * 60 * 60 * 24 * 30.44);

        const years = Math.floor(diffMonths / 12);
        const months = Math.round(diffMonths % 12);

        if (years >= 1) {
            return `${years}+ yr${years > 1 ? "s" : ""}`;
        }

        return `${months} mo`;
    };

    return (
        <section id="Career">
            <h2>Career</h2>

            <div className="Career_timeline">
                {careerData.map((item) => (
                    <div 
                        className={`Career_item ${selectedRole.role === item.role ? "active" : ""}`} 
                        onClick={() => setSelectedRole(item)}
                    >
                        <div className="Career_circle"></div>
                        <span className="Career_label">{item.role}</span>
                    </div>
                ))}
            </div>
            
            <div className="Career_details">
                <h3>{selectedRole.role}</h3>
                <p className="Career_duration">
                    {getDurationLabel(selectedRole.start, selectedRole.end)}
                </p>
                <p className="Career_description">
                    {selectedRole.description}
                </p>

                <div className="Career_skills">
                    {selectedRole.skills?.map((skills, i) => {
                        <span key={i}>{skills}</span>
                    })}
                </div>

                <Button onClick={() => selectedRole(null)}>
                    Close
                </Button>
            </div>
        </section>
    )
}

export default Career