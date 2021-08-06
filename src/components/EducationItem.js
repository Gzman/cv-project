import { Component } from "react";
import { CvForm } from "./CVForm"
import { Education } from "../models/Education"
import uniqid from "uniqid";

class EducationItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            educations: [
                {
                    id: uniqid(),
                    ...Education(),
                },
            ],
        }
        this.addEducation = this.addEducation.bind(this);
        this.editEducation = this.editEducation.bind(this);
        this.removeEducation = this.removeEducation.bind(this);
    }

    addEducation() {
        console.log("Implement");
    }

    editEducation(id, property, value) {
        const edus = this.state.educations.slice();
        const index = edus.findIndex((edu) => edu.id === id);
        edus[index][property] = value;
        this.setState({
            educations: edus,
        });
    }

    removeEducation() {
        console.log("Implement");
    }

    render() {
        const { educations } = this.state;
        return (
            <div className="Education-items">
                <h2>Education</h2>
                {
                    educations.map(edu =>
                        <CvForm
                            key={edu.id}
                            category={edu}
                            categoryId={edu.id}
                            categoryName="Education"
                            handleInput={this.editEducation}
                        />
                    )
                }
            </div>
        )
    }
}

export { EducationItem }