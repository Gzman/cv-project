import { Component } from "react";
import { CategoriesMeta, Categories } from "./models/Categories"
import { CVForm } from "../src/components/CVForm"
import uniqid from "uniqid"

const { PERSONAL_INFO, EXPERIENCE, EDUCATION } = CategoriesMeta;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      [PERSONAL_INFO]: [
        {
          id: uniqid(),
          ...Categories[PERSONAL_INFO].model(),
        },
      ],
      [EXPERIENCE]: [
        {
          id: uniqid(),
          ...Categories[EXPERIENCE].model(),
        },
      ],
      [EDUCATION]: [
        {
          id: uniqid(),
          ...Categories[EDUCATION].model(),
        },
      ],
    }
    this.addCategoryItem = this.addCategoryItem.bind(this);
    this.removeCategoryItem = this.removeCategoryItem.bind(this);
    this.editCategoryItem = this.editCategoryItem.bind(this);
  }

  addCategoryItem(categoryName) {
    let category = this.state[categoryName].slice();
    category = [
      ...category,
      { id: uniqid(), ...Categories[categoryName].model() },
    ];
    this.setState({
      [categoryName]: category,
    });
  }

  editCategoryItem(categoryName, id, property, value) {
    const category = this.state[categoryName].slice();
    const index = category.findIndex((item) => item.id === id);
    category[index][property] = value;
    this.setState({
      category,
    });
  }

  removeCategoryItem(categoryName, id) {
    const category = this.state[categoryName];
    this.setState({
      [categoryName]: category.filter((item) => item.id !== id),
    });
  }

  render() {
    return (
      <div className="App" >
        <CVForm
          personalInfo={this.state[PERSONAL_INFO]}
          editPersonalInfo={(id, property, value) => this.editCategoryItem(PERSONAL_INFO, id, property, value)}

          experiences={this.state[EXPERIENCE]}
          addExperience={() => this.addCategoryItem(EXPERIENCE)}
          editExperiences={(id, property, value) => this.editCategoryItem(EXPERIENCE, id, property, value)}
          removeExperience={(id) => this.removeCategoryItem(EXPERIENCE, id)}

          educations={this.state[EDUCATION]}
          addEducation={() => this.addCategoryItem(EDUCATION)}
          editEducations={(id, property, value) => this.editCategoryItem(EDUCATION, id, property, value)}
          removeEducation={(id) => this.removeCategoryItem(EDUCATION, id)}
        />
      </div>
    )
  }
}

export default App;
