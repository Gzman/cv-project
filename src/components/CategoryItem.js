import React, { Component } from "react";
import { validator } from "./validator"

class CategoryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: [],
        }
        this.validate = this.validate.bind(this);
    }

    validate = (property, input) => {
        const v = validator[property];
        if (v) {
            const error = v(input);
            this.setState((state) => ({
                errors: (error === null) ? [] : [...state.errors, `${property} : ${error}`],
            }));
        }
    }

    render() {
        const { category, categoryId, categoryName, editItem, removeItem } = this.props;
        const { errors } = this.state;
        return (
            <div id={`${categoryName}-item`}>
                <div className="feedback">
                    {errors.map((error, index) => <p key={index}>{error}</p>)}
                </div>
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
                {<button onClick={removeItem}>Delete</button>}
            </div >
        )
    }
}

export { CategoryItem }