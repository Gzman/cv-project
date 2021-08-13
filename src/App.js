import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CategoriesMeta } from "./models/Categories";
import { CVForm } from "../src/components/cv-form/CVForm";
import { CVOutput } from "../src/components/cv-output/CVOutput";
import { useCVData } from "./hooks/useCVData";

import "./style/index.css"

const { PERSONAL_INFO, EXPERIENCE, EDUCATION } = CategoriesMeta;

function App() {
  const [
    state,
    addCategoryItem,
    editCategoryItem,
    removeCategoryItem,
    reset
  ] = useCVData();

  return (
    <div className="App" >
      <Header />
      <main>
        <CVForm
          personalInfo={state[PERSONAL_INFO]}
          editPersonalInfo={(id, property, value) => editCategoryItem(PERSONAL_INFO, id, property, value)}

          experiences={state[EXPERIENCE]}
          addExperience={() => addCategoryItem(EXPERIENCE)}
          editExperiences={(id, property, value) => editCategoryItem(EXPERIENCE, id, property, value)}
          removeExperience={(id) => removeCategoryItem(EXPERIENCE, id)}

          educations={state[EDUCATION]}
          addEducation={() => addCategoryItem(EDUCATION)}
          editEducations={(id, property, value) => editCategoryItem(EDUCATION, id, property, value)}
          removeEducation={(id) => removeCategoryItem(EDUCATION, id)}

          reset={reset}
        />
        <CVOutput personalInfo={state[PERSONAL_INFO]} education={state[EDUCATION]} experience={state[EXPERIENCE]} />
      </main>
      <Footer />
    </div>
  )
}

export default App;
