import { PersonalInfo } from "./PersonalInformation"
import { Experience } from "./Experience"
import { Education } from "./Education"
import "../../style/cv-output/CVOutput.css"

function CVOutput({ personalInfo, experience, education }) {
    return (
        <div className="output">
            <div className="output-paper">
                <PersonalInfo personalInfo={personalInfo[0]} />
                <Experience experiences={experience} />
                <Education educations={education} />
            </div>
        </div>
    )
}

export { CVOutput }