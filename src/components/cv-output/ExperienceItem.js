import React from "react"
import "../../style/cv-output/Experience.css"

function ExperienceItem({ categoryName, from, to, company, position, description }) {
    return (
        <div className={`${categoryName}-content`}>
            <div className={`${categoryName}-header`}>
                <div className={`${categoryName}-years`}>
                    <p className={`${categoryName}-period`}>{`${from} - ${to}`}</p>
                </div>
                <div className={`${categoryName}-info`}>
                    <p className={`${categoryName}-position`}>{position}</p>
                    <p className={`${categoryName}-company`}>{company}</p>
                </div>
            </div>
            <div className={`${categoryName}-description`}>
                <p className={`${categoryName}-description`}>{description}</p>
            </div>
        </div>
    )
}

export { ExperienceItem }