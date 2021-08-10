import React from "react";
import { Categories, CategoriesMeta } from "../../models/Categories"
import { CategoryItem } from "./CategoryItem"
import "../../style/cv-form/Category.css"

function Education({ data, add, edit, remove }) {
    const { title } = Categories[CategoriesMeta.EDUCATION];
    return (
        <div className="cv-form-category">
            <h2 className="cv-form-category-title">Education</h2>
            <div className="cv-form-category-items">
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
            </div>
            <button className="cv-form-category-add" onClick={add}>New Entry</button>
        </div>
    )
}

export { Education }