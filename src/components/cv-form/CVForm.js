import { Component } from "react";
import { Experience } from "./Experience"
import { Education } from "./Education"
import { PersonalInfo } from "./PersonalInformation";
import "../../style/cv-form/CVForm.css"


class CVForm extends Component {

    render() {
        const { personalInfo, editPersonalInfo } = this.props;
        const { experiences, addExperience, editExperiences, removeExperience } = this.props;
        const { educations, addEducation, editEducations, removeEducation } = this.props;
        const { reset } = this.props;
        return (
            <div className="cv-form">
                <div className="cv-form-categories">
                    <PersonalInfo data={personalInfo} edit={editPersonalInfo} />
                    <Experience data={experiences} add={addExperience} edit={editExperiences} remove={removeExperience} />
                    <Education data={educations} add={addEducation} edit={editEducations} remove={removeEducation} />
                    <button className="cv-form-reset-btn" onClick={reset}>Reset</button>
                </div>
            </div>
        )
    }
}

export { CVForm }