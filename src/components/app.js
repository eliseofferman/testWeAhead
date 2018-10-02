import React from "react"
import Header from "./header"
import Form from "./form"
import ".././index.css"

class App extends React.Component {

  state = {
    savedReport: []
  }

  submitt = (from, to, nots, project, activity) => {
    const report = this.state.savedReport
    report.push({id: Date.now(), from:from, to:to, nots: nots, project:project, activity:activity })
    this.setState({
      savedReport: report
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Form
          submitt={this.submitt}
          inputProject={this.state.inputProject}
          inputActivity={this.state.inputActivity}
          updateInputProject={this.updateInputProject}
          updateInputActivity={this.updateInputActivity} />
      </div>
    )
  }

}

export default App
