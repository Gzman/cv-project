import { CategoriesMeta } from "../../models/Categories";
import { PersonalInfoItem } from "./PersonalInfoItem";
import { PersonalInfoMeta } from "../../models/PersonalInfoModel";
import { Category } from "./Category"

function PersonalInfo({ personalInfo }) {
    const { PERSONAL_INFO } = CategoriesMeta;
    const { FIRSTNAME, LASTNAME, TITLE, CITY, PHONE, EMAIL } = PersonalInfoMeta;
    return (
        <Category>
            <PersonalInfoItem
                categoryName={PERSONAL_INFO.toLowerCase()}
                firstname={personalInfo[FIRSTNAME]}
                lastname={personalInfo[LASTNAME]}
                title={personalInfo[TITLE]}
                city={personalInfo[CITY]}
                phoneNumber={personalInfo[PHONE]}
                email={personalInfo[EMAIL]}
            />
        </Category>
    )
}

export { PersonalInfo }