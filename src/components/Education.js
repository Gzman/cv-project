import React from "react";
import { Categories, CategoriesMeta } from "../models/Categories"
import { CategoryItem } from "./CategoryItem"

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
            </div>
            <button className={`add-${CategoriesMeta.EDUCATION}`} onClick={add}>Add</button>
        </div>
    )
}

export { Education }