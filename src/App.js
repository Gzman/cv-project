import { Component } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CategoriesMeta, Categories } from "./models/Categories";
import { CVForm } from "../src/components/cv-form/CVForm";
import { CVOutput } from "../src/components/cv-output/CVOutput";
import uniqid from "uniqid";
import "./style/index.css"

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
        <Header />
        <main>
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
          <CVOutput personalInfo={this.state[PERSONAL_INFO]} education={this.state[EDUCATION]} experience={this.state[EXPERIENCE]} />
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
