import React from "react"

function Education({ categoryName, from, to, school, degree }) {
    return (
        <div className={categoryName}>
            <div>
                <p>{from}</p>
                <p>{to}</p>
            </div>
            <div>
                <p>{degree}</p>
                <p>{school}</p>
            </div>
        </div>
    )
}

export { Education }