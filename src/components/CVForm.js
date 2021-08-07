import { Component } from "react";
import { Education } from "./Education"

class CVForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { educations, addEducation, editEducations, removeEducation } = this.props;
        return (
            <form id="cv-form" onSubmit={(e) => e.preventDefault()}>
                <h2>Personal Information</h2>
                <h2>Experience</h2>
                <Education data={educations} add={addEducation} edit={editEducations} remove={removeEducation} />
                <button onClick={() => console.log("Clear all inputs")}>Reset</button>
            </form>
        )
    }
}

export { CVForm }