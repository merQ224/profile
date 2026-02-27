import { useState, useMemo } from 'react';
import { careerData } from '../data/career.js'
import Button from '../components/Button.jsx'
import '../styles/Career.css'

function Career() {
    const [selectedRole, setSelectedRole] = useState(null);
    
    const buildCareerTimeline = (careerData, MIN_WIDTH = 15) => {
        const startDates = careerData.map(c => new Date(c.start));
        const endDates = careerData.map(c => new Date(c.end));

        const timelineStart = new Date(Math.min(...startDates));
        const timelineEnd = new Date(Math.max(...endDates));
        const totalTime = timelineEnd - timelineStart;

        return careerData.map(c => {
            const start = new Date(c.start);
            const end = new Date(c.end);

            const leftPercent = ((start - timelineStart) / totalTime) * 100;
            const widthPercentRaw = ((end - start) / totalTime) * 100;
            let  widthPercent = Math.max(widthPercentRaw, MIN_WIDTH);

            if (leftPercent + widthPercent > 100) {
                widthPercent = 100 - leftPercent;
            }

            return { ...c, leftPercent, widthPercent };
        });
    };

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

    const careerWithPosition = useMemo(() => {
        return buildCareerTimeline(careerData);
    }, []);

    return (
        <section id="Career">
            <h2>Career</h2>

            <div className="Career_timeline">
            {careerWithPosition.map((item, i) => (
                <div
                key={i}
                className="Career_item"
                style={{
                    left: `${item.leftPercent}%`,
                    width: `${item.widthPercent}%`,
                    top: `${i * 60}px`
                }}
                onClick={() => setSelectedRole(item)}
                >
                    <span>
                        {item.role}{" "}
                        <span className="Career_years">
                            {getDurationLabel(item.start, item.end)}
                        </span>
                    </span>
                </div>
            ))}
            </div>
            
            {selectedRole && (
                <div className="Career_modal_overlay" onClick={() => setSelectedRole(null)}>
                    <div className="Career_modal" onClick={(e) => e.stopPropagation()}>
                        <h3>{selectedRole.role}</h3>
                        <p className="Career_duration">
                            {getDurationLabel(selectedRole.start, selectedRole.end)}
                        </p>

                        <p className="Career_description">
                            Description: {selectedRole.description}
                        </p>

                        <div className="Career_skills"> Skills Learnt: 
                            {selectedRole.skills?.map((skill, idx) => (
                            <span key={idx} className="Career_skill">
                                {" "}{skill}
                            </span>
                            ))}
                        </div>

                        <Button onClick={() => setSelectedRole(null)}>
                            Close
                        </Button>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Career