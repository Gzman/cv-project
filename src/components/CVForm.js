import { Component } from "react";
import { Education } from "./Education"

class CVForm extends Component {
    constructor(props) {
        super(props);
    }

    render() { // Should return a <form> element
        return (
            <div id="cv-form" >
                <h2>Personal Information</h2>
                <h2>Experience</h2>
                <Education />
            </div>
        )
    }
}

export { CVForm }