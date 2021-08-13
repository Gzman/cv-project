import { CategoriesMeta } from "../../models/Categories";
import { EducationItem } from "./EducationItem";
import { EducationMeta } from "../../models/EducationModel";
import { Category } from "./Category"

function Education({ educations }) {
    const { EDUCATION } = CategoriesMeta;
    const { FROM, TO, SCHOOL, DEGREE } = EducationMeta;
    return (
        <Category title="Education">
            {
                educations.map((edu, index) =>
                    <EducationItem
                        key={index}
                        categoryName={EDUCATION.toLowerCase()}
                        from={edu[FROM]}
                        to={edu[TO]}
                        school={edu[SCHOOL]}
                        degree={edu[DEGREE]}
                    />
                )
            }
        </Category>
    )
}

export { Education }