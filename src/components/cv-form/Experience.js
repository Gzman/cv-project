import React from "react"
import { CategoriesMeta, Categories } from "../../models/Categories"
import { CategoryItem } from "./CategoryItem";
import "../../style/cv-form/Category.css"

function Experience({ data, add, edit, remove }) {
    const { title } = Categories[CategoriesMeta.EXPERIENCE];
    return (
        <div className="cv-form-category">
            <h2 className="cv-form-category-title">{title}</h2>
            <div className="cv-form-category-items" >
                {data.map((exp) =>
                    <CategoryItem
                        key={exp.id}
                        category={exp}
                        categoryId={exp.id}
                        categoryName={title}
                        editItem={edit}
                        removeItem={() => remove(exp.id)}
                    />
                )}
            </div>
            <button className="cv-form-category-add" onClick={add}>New Entry</button>
        </div>
    )
}

export { Experience }