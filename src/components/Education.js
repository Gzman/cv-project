import React, { Component } from "react";
import { CategoryItem } from "./CategoryItem"
import { EducationModel, EducationMeta } from "../models/EducationModel"
import uniqid from "uniqid";

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            educations: [
                {
                    id: uniqid(),
                    ...EducationModel(),
                },
            ],
        }
        this.addEducation = this.addEducation.bind(this);
        this.editEducation = this.editEducation.bind(this);
        this.removeEducation = this.removeEducation.bind(this);
    }

    addEducation() {
        let educations = this.state.educations.slice();
        educations = [
            ...educations,
            { id: uniqid(), ...EducationModel() },
        ];
        this.setState({
            educations,
        });
    }

    editEducation(id, property, value) {
        const edus = this.state.educations.slice(); // Shallow copy?
        const index = edus.findIndex((edu) => edu.id === id);
        edus[index][property] = value;
        this.setState({
            educations: edus,
        });
    }

    removeEducation(id) {
        const { educations } = this.state;
        this.setState({
            educations: educations.filter((edu) => edu.id !== id),
        });
    }

    render() {
        const { educations } = this.state;
        const categoryTitle = "Education";
        return (
            <div className={`${categoryTitle}`}>
                <h2 className={`${categoryTitle.toLocaleLowerCase()}-title`}>Education</h2>
                <div className={`${categoryTitle.toLocaleLowerCase()}-items`}>
                    {
                        educations.map(edu =>
                            <CategoryItem
                                key={edu.id}
                                category={edu}
                                categoryId={edu.id}
                                categoryName={categoryTitle}
                                editItem={this.editEducation}
                                removeItem={() => this.removeEducation(edu.id)}
                            />
                        )
                    }
                    {
                        educations.map((edu, index) =>
                            <ul key={index}>
                                <li>{edu[EducationMeta.FROM]}</li>
                                <li>{edu[EducationMeta.TO]}</li>
                                <li>{edu[EducationMeta.SCHOOL]}</li>
                                <li>{edu[EducationMeta.DEGREE]}</li>
                            </ul>
                        )
                    }
                </div>
                <button className={`add-${categoryTitle}`} onClick={this.addEducation}>Add</button>
            </div>
        )
    }
}

export { Education }