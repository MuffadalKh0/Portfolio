import React, { Component } from 'react'

export class Project extends Component {
  
  // componentDidMount() {
  //   window.addEventListener('plat', this.platcheck);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('plat', this.platcheck);
  // }

  platcheck = () => {
    if(this.props.on === "Codepen") { 
      return(
        <i class="fab fa-codepen"></i>
      ) 
    }
  }

  render() {
    return (
      <div className="grey-overlay">
        <a className="project" href={this.props.link}>
          <div class="whitespace"></div>
          <h2 class="port-title">{this.props.projectName}{ this.platcheck }</h2>
        </a>
      </div>
    )
  }
}

export default Project