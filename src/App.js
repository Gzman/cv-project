import { Component } from "react";
import { EducationItem } from "./components/EducationItem";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App" >
        <EducationItem />
      </div>
    )
  }
}

export default App;
