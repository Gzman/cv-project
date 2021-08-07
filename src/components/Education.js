import React from "react";
import { Categories, CategoriesMeta } from "../models/Categories"
import { CategoryItem } from "./CategoryItem"
import { EducationMeta } from "../models/EducationModel"

function Education({ data, add, edit, remove }) {
    const { title } = Categories[CategoriesMeta.EDUCATION];
    return (
        <div className={`${title}`}>
            <h2 className={`${CategoriesMeta.EDUCATION}-title`}>Education</h2>
            <div className={`${CategoriesMeta.EDUCATION}-items`}>
                {
                    data.map(edu =>
                        <CategoryItem
                            key={edu.id}
                            category={edu}
                            categoryId={edu.id}
                            categoryName={title}
                            editItem={edit}
                            removeItem={() => remove(edu.id)}
                        />
                    )
                }
                {
                    data.map((edu, index) =>
                        <ul key={index}>
                            <li>{edu[EducationMeta.FROM]}</li>
                            <li>{edu[EducationMeta.TO]}</li>
                            <li>{edu[EducationMeta.SCHOOL]}</li>
                            <li>{edu[EducationMeta.DEGREE]}</li>
                        </ul>
                    )
                }
            </div>
            <button className={`add-${CategoriesMeta.EDUCATION}`} onClick={add}>Add</button>
        </div>
    )
}

export { Education }