import '../styles/Career.css'
import { careerData } from '../data/career.js'
import { useMemo } from 'react';

function Career() {
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
            const widthPercent = Math.max(widthPercentRaw, MIN_WIDTH);

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
        </section>
    )
}

export default Career