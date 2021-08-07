import { Component } from "react";
import { CVForm } from "../src/components/CVForm"

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App" >
        <CVForm />
      </div>
    )
  }
}

export default App;
