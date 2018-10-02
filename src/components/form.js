import React from "react"

const projects = [
  "Var god välj ett projekt...",
  "Project 1",
  "Project 2",
  "Project 3"
]

const activities = [
  "Var god välj ett aktivitet...",
  "Aktivitet 1",
  "Aktivitet 2",
  "Aktivitet 3"
]

class Form extends React.Component {

  state = {
    inputProject: "Var god välj ett projekt...",
    inputActivity: "Var god välj ett aktivitet...",
    from: null,
    to: null,
    nots: null
  }

  handleProject = event => {
    this.setState({ inputProject: event.target.value })
  }

  handleActivity = event => {
    this.setState({ inputActivity: event.target.value })
  }

  handleFrom = event => {
    this.setState({
      from: event.target.value
    })
  }

  handleTo = event => {
    this.setState({
      to: event.target.value
    })
  }

  handleNots = event => {
    this.setState({
      nots: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.submitt(this.state.from, this.state.to, this.state.nots, this.state.inputProject, this.state.inputActivity)
    this.setState({
      from: "",
      to: "",
      nots: "",
      inputProject: "Var god välj ett projekt...",
      inputActivity: "Var god välj ett aktivitet..."
    })
  }

  render() {
    return (
      <form className="reportForm" onSubmit={this.handleSubmit}>
        <div>
          <label>
            <h3>Projekt</h3>
            <select onChange={this.handleProject}>
              {projects.map(alternative => (
                <option
                  selected={alternative === this.state.inputProject}
                  key={alternative}
                  value={alternative}>
                  {alternative}
                </option>
              ))}
            </select>
          </label>

          <label>
            <h3>Aktivitet</h3>
            <select onChange={this.handleActivity}>
              {activities.map(alternative => (
                <option
                  selected={alternative === this.state.inputActivity}
                  key={alternative}
                  value={alternative}>
                  {alternative}
                </option>
              ))}
            </select>
          </label>

          <div>
            <lable>
              <h3>Från</h3>
              <input
                name="from"
                type="text"
                value={this.state.from}
                onChange={this.handleFrom} />
            </lable>

            <lable>
              <h3>Till</h3>
              <input
                name="to"
                type="text"
                value={this.state.to}
                onChange={this.handleTo} />
            </lable>
          </div>
        </div>

        <div>
          <lable>
            <h3>Anteckningar</h3>
            <textarea
              name="nots"
              type="text"
              value={this.state.nots}
              onChange={this.handleNots} />
          </lable>
          <button>Spara</button>
        </div>
      </form>
    )
  }

}

export default Form
