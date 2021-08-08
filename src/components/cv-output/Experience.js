import React from "react"

function Experience({ categoryName, from, to, company, position, description }) {
    return (
        <div className={`${categoryName}-content`}>
            <div className={`${categoryName}-period`}>
                <p className={`${categoryName}-from`}>{from}</p>
                <p className={`${categoryName}-to`}>{to}</p>
            </div>
            <div className={`${categoryName}-info`}>
                <p className={`${categoryName}-position`}>{position}</p>
                <p className={`${categoryName}-company`}>{company}</p>
            </div>
            <div className={`${categoryName}-description`}>
                <p className={`${categoryName}-description`}>{description}</p>
            </div>
        </div>
    )
}

export { Experience }