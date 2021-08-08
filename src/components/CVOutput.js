import { Component } from "react";
import { PersonalInfo } from "./cv-output/PersonalInfo"
import { PersonalInfoMeta } from "../models/PersonalInfoModel"
import { Experience } from "./cv-output/Experience";
import { ExperienceMeta } from "../models/ExperienceModel";
import { EducationMeta } from "../models/EducationModel";
import { Education } from "./cv-output/Education";
import { CategoriesMeta } from "../models/Categories";

class CVOutput extends Component {

    render() {
        const { FIRSTNAME, LASTNAME, TITLE, PHONE, EMAIL } = PersonalInfoMeta;
        const { FROM, TO, COMPANY, POSITION, DESCRIPTION } = ExperienceMeta;
        const { SCHOOL, DEGREE } = EducationMeta;
        const { PERSONAL_INFO, EXPERIENCE, EDUCATION } = CategoriesMeta;
        const personalInfo = this.props.personalInfo[0];
        const experiences = this.props.experience;
        const educations = this.props.education;
        return (
            <div className="output">
                <h2>Personal Info</h2>
                <PersonalInfo
                    categoryName={PERSONAL_INFO}
                    firstname={personalInfo[FIRSTNAME]}
                    lastname={personalInfo[LASTNAME]}
                    title={personalInfo[TITLE]}
                    phoneNumber={personalInfo[PHONE]}
                    email={personalInfo[EMAIL]}
                />
                <h2>Experience</h2>
                {experiences.map((exp, index) =>
                    <Experience
                        key={index}
                        categoryName={EXPERIENCE}
                        from={exp[FROM]}
                        to={exp[TO]}
                        company={exp[COMPANY]}
                        position={exp[POSITION]}
                        description={exp[DESCRIPTION]}
                    />
                )}
                <h2>Education</h2>
                {
                    educations.map((edu, index) =>
                        <Education
                            key={index}
                            categoryName={EDUCATION}
                            from={edu[FROM]}
                            to={edu[TO]}
                            school={edu[SCHOOL]}
                            degree={edu[DEGREE]}
                        />
                    )
                }
            </div>
        )
    }
}

export { CVOutput }