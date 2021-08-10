import React from "react"
import { CategoriesMeta, Categories } from "../../models/Categories"
import { CategoryItem } from "./CategoryItem"
import "../../style/cv-form/Category.css"

function PersonalInfo({ data, edit }) {
    const { title } = Categories[CategoriesMeta.PERSONAL_INFO];

    return (
        <div className="cv-form-category">
            <h2 className="cv-form-category-title">{title}</h2>
            <div className="cv-form-category-items">
                {
                    data.map((pers) =>
                        <CategoryItem
                            key={pers.id}
                            category={pers}
                            categoryId={pers.id}
                            categoryName={title}
                            editItem={edit}
                        />
                    )
                }
            </div>
        </div>
    )
}

export { PersonalInfo }