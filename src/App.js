import { Component } from "react";
import { CategoriesMeta, Categories } from "./models/Categories"
import { CVForm } from "../src/components/CVForm"
import uniqid from "uniqid"

const { PERSONAL_INFO, EXPERIENCE, EDUCATION } = CategoriesMeta;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.initState();
    this.initState = this.initState.bind(this);
    this.addCategoryItem = this.addCategoryItem.bind(this);
    this.removeCategoryItem = this.removeCategoryItem.bind(this);
    this.editCategoryItem = this.editCategoryItem.bind(this);
    this.reset = this.reset.bind(this);
  }

  initState() {
    const initialState = Object
      .values(CategoriesMeta)
      .map((category) => [
        [category], [
          {
            id: uniqid(),
            ...Categories[category].model(),
          }
        ]
      ]);
    return Object.fromEntries(initialState);
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

  reset() {
    this.setState(this.initState());
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

          reset={this.reset}
        />
      </div>
    )
  }
}

export default App;
