import React, { Component } from "react"
import { validator } from "../validator"
import "../../style/cv-form/CategoryItem.css"

class CategoryItem extends Component {
    state = {
        errors: new Set(),
    }

    validate = (property, input) => {
        const v = validator[property];
        if (v) {
            const error = v(input);
            this.setState(({ errors }) => ({
                errors: (error === null) ? new Set() : new Set(errors).add(`${property} : ${error}`),
            }));
        }
    }

    render() {
        const { category, categoryId, categoryName, editItem, removeItem } = this.props;
        const { errors } = this.state;
        return (
            <div id={`${categoryName}-item`} className="category-item">
                {
                    (errors.size > 0) &&
                    <div className="feedback">{[errors].map((error, index) => <p key={index}>{error}</p>)}</div>
                }
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
                                onBlur={(e) => this.validate(property, e.target.value)}
                            />
                        })
                }
                {removeItem && <button onClick={removeItem}>Delete</button>}
            </div >
        )
    }
}

export { CategoryItem }