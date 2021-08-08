import { EducationModel } from "./EducationModel"
import { ExperienceModel } from "./ExperienceModel"
import { PersonalInfoModel } from "./PersonalInfoModel"

const CategoriesMeta = {
    PERSONAL_INFO: "personalInfo",
    EXPERIENCE: "experience",
    EDUCATION: "education",
}

const { PERSONAL_INFO, EXPERIENCE, EDUCATION } = CategoriesMeta;

const Categories = {
    [PERSONAL_INFO]: { title: "Personal Info", model: PersonalInfoModel },
    [EXPERIENCE]: { title: "Experience", model: ExperienceModel },
    [EDUCATION]: { title: "Education", model: EducationModel },
}

export { CategoriesMeta, Categories }