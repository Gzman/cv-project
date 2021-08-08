import React from "react"

function Experience({ categoryName, from, to, company, position, description }) {
    return (
        <div className={categoryName}>
            <div>
                <p>{from}</p>
                <p>{to}</p>
            </div>
            <div>
                <p>{position}</p>
                <p>{company}</p>
            </div>
            <div>
                <p>{description}</p>
            </div>
        </div>
    )
}

export { Experience }