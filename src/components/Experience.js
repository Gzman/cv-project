import React from "react"
import { CategoriesMeta, Categories } from "../models/Categories"
import { CategoryItem } from "./CategoryItem";

function Experience({ data, add, edit, remove }) {
    const { title } = Categories[CategoriesMeta.EXPERIENCE];
    return (
        <div className={title}>
            <h2 className={`${CategoriesMeta.EXPERIENCE}-title`}>{title}</h2>
            <div className={`${CategoriesMeta.EXPERIENCE}-items`} >
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
            <button className={`${CategoriesMeta.EXPERIENCE}-add-btn`} onClick={add}>Add</button>
        </div>
    )
}

export { Experience }