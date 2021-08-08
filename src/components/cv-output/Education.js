import React from "react"

function Education({ categoryName, from, to, school, degree }) {
    return (
        <div className={`${categoryName}-content`}>
            <div className={`${categoryName}-period`}>
                <p className={`${categoryName}-from`}>{from}</p>
                <p className={`${categoryName}-to`}>{to}</p>
            </div>
            <div className={`${categoryName}-info`}>
                <p className={`${categoryName}-degree`}>{degree}</p>
                <p className={`${categoryName}-school`}>{school}</p>
            </div>
        </div>
    )
}

export { Education }