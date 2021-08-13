import { CategoriesMeta } from "../../models/Categories";
import { ExperienceItem } from "./ExperienceItem";
import { ExperienceMeta } from "../../models/ExperienceModel";
import { Category } from "./Category"

function Experience({ experiences }) {
    const { EXPERIENCE } = CategoriesMeta;
    const { FROM, TO, COMPANY, POSITION, DESCRIPTION } = ExperienceMeta;
    return (
        <Category title="Experience">
            {
                experiences.map((exp, index) =>
                    <ExperienceItem
                        key={index}
                        categoryName={EXPERIENCE.toLowerCase()}
                        from={exp[FROM]}
                        to={exp[TO]}
                        company={exp[COMPANY]}
                        position={exp[POSITION]}
                        description={exp[DESCRIPTION]}
                    />
                )
            }
        </Category>
    )
}

export { Experience }