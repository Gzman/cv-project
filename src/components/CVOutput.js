import { Component } from "react";
import { PersonalInfo } from "./cv-output/PersonalInfo"
import { PersonalInfoMeta } from "../models/PersonalInfoModel"
import { Experience } from "./cv-output/Experience";
import { ExperienceMeta } from "../models/ExperienceModel";
import { EducationMeta } from "../models/EducationModel";
import { Education } from "./cv-output/Education";
import { CategoriesMeta } from "../models/Categories";
import "../style/CVOutput.css"

class CVOutput extends Component {
    render() {
        const { FIRSTNAME, LASTNAME, TITLE, CITY, PHONE, EMAIL } = PersonalInfoMeta;
        const { FROM, TO, COMPANY, POSITION, DESCRIPTION } = ExperienceMeta;
        const { SCHOOL, DEGREE } = EducationMeta;
        const { PERSONAL_INFO, EXPERIENCE, EDUCATION } = CategoriesMeta;
        const personalInfo = this.props.personalInfo[0];
        const experiences = this.props.experience;
        const educations = this.props.education;
        return (
            <div className="output">
                <div className="output-paper">
                    <div className="output-category">
                        <PersonalInfo
                            categoryName={PERSONAL_INFO.toLowerCase()}
                            firstname={personalInfo[FIRSTNAME]}
                            lastname={personalInfo[LASTNAME]}
                            title={personalInfo[TITLE]}
                            city={personalInfo[CITY]}
                            phoneNumber={personalInfo[PHONE]}
                            email={personalInfo[EMAIL]}
                        />
                    </div>
                    <div className="output-category">
                        <h2 className="output-category-title">Experience</h2>
                        <div className="output-category-items">
                            {experiences.map((exp, index) =>
                                <Experience
                                    key={index}
                                    categoryName={EXPERIENCE.toLowerCase()}
                                    from={exp[FROM]}
                                    to={exp[TO]}
                                    company={exp[COMPANY]}
                                    position={exp[POSITION]}
                                    description={exp[DESCRIPTION]}
                                />
                            )}
                        </div>
                    </div>
                    <div className="output-category">
                        <h2 className="output-category-title">Education</h2>
                        <div className="output-category-items">
                            {
                                educations.map((edu, index) =>
                                    <Education
                                        key={index}
                                        categoryName={EDUCATION.toLowerCase()}
                                        from={edu[FROM]}
                                        to={edu[TO]}
                                        school={edu[SCHOOL]}
                                        degree={edu[DEGREE]}
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { CVOutput }