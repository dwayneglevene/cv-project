import { Component } from "react";

class Education extends Component {
  render() {
    return (
      <div className="card-body">
        <h3>Education</h3>
        <p>{this.props.education.qualifications[0]}</p>
        <i
          className="fas fa-edit"
          onClick={() => this.props.edit(this.props.id)}
          data-toggle="modal"
          data-target="#editModal"
        ></i>
      </div>
    );
  }
}

export default Education;
