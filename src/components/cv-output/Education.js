import React from "react"
import "../../style/cv-output/Education.css"

function Education({ categoryName, from, to, school, degree }) {
    return (
        <div className={`${categoryName}-content`}>
            <div className={`${categoryName}-header`}>
                <div className={`${categoryName}-years`}>
                    <p className={`${categoryName}-period`}>{`${from} - ${to}`}</p>
                </div>
                <div className={`${categoryName}-info`}>
                    <p className={`${categoryName}-degree`}>{degree}</p>
                    <p className={`${categoryName}-school`}>{school}</p>
                </div>
            </div>
        </div>
    )
}

export { Education }