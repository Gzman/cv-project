import React, { Component } from "react";

class CvForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { category, categoryId, categoryName, handleInput } = this.props;
        return (
            <form id={`${categoryName}-form`}>
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
                                onChange={(e) => handleInput(categoryId, e.target.name, e.target.value)}
                            />
                        })
                }
            </form>
        )
    }

}

export { CvForm }