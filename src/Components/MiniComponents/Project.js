import React, { Component } from 'react'

export class Project extends Component {
  render() {
    return (
        <div className="project">
            <h2 class="port-title"><a href={this.props.link}>{this.props.projectName}</a></h2>
        </div>
    )
  }
}

export default Project
