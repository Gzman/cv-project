import React from "react";

function CategoryItem({ category, categoryId, categoryName, editItem, removeItem }) {
    return (
        <div id={`${categoryName}-item`}>
            {
                Object
                    .keys(category)
                    .filter(property => property !== "id")
                    .map((property) => {
                        return <input
                            key={`${categoryId}${property}`}
                            type="text"
                            name={property}
                            placeholder={property}
                            value={category[property]}
                            onChange={(e) => editItem(categoryId, e.target.name, e.target.value)}
                        />
                    })
            }
            <button onClick={removeItem}>Delete</button>
        </div>
    )
}

export { CategoryItem }