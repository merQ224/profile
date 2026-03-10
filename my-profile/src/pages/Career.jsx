import { useState    } from 'react';
import { careerData } from '../data/career.js'
import '../styles/Career.css'

function Career() {
    const [data, setCareerData] = useState(careerData[5]);

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
                        className={`Career_item ${data.role === item.role ? "active" : ""}`} 
                        onClick={() => setCareerData(item)}
                    >
                        <div className="Career_circle"></div>
                        <span className="Career_label">{item.role}</span>
                    </div>
                ))}
            </div>
            
            <div className="Career_details">
                <h3 className="Career_Title">{data.role}</h3>
                <p>
                    {getDurationLabel(data.start, data.end)}
                </p>
                
                {data.description?.map((paragraph, i) => (
                    <p key={i} className="Career_description">{paragraph}</p>
                ))}

                <div className="Career_skills">
                    {data.skills?.map((skill, i) => {
                        <span key={i}>{skill}</span>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Career