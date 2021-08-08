import { Component } from "react";
import { Experience } from "./Experience"
import { Education } from "./Education"
import { PersonalInfo } from "./PersonalInformation";


class CVForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { personalInfo, editPersonalInfo } = this.props;
        const { experiences, addExperience, editExperiences, removeExperience } = this.props;
        const { educations, addEducation, editEducations, removeEducation } = this.props;
        return (
            <form id="cv-form" onSubmit={(e) => e.preventDefault()}>
                <PersonalInfo data={personalInfo} edit={editPersonalInfo} />
                <Experience data={experiences} add={addExperience} edit={editExperiences} remove={removeExperience} />
                <Education data={educations} add={addEducation} edit={editEducations} remove={removeEducation} />
                <button onClick={() => console.log("Clear all inputs")}>Reset</button>
            </form>
        )
    }
}

export { CVForm }