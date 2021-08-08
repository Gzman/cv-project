import React from "react"
import { CategoriesMeta, Categories } from "../models/Categories"
import { CategoryItem } from "./CategoryItem";

function PersonalInfo({ data, edit }) {
    const { title } = Categories[CategoriesMeta.PERSONAL_INFO];
    return (
        <div className={`${title}`}>
            <h2 className={`${CategoriesMeta.PERSONAL_INFO}-title`}>{title}</h2>
            <div className={`${CategoriesMeta.PERSONAL_INFO}-items`}>
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