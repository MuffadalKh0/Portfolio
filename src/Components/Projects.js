import React, { Component } from 'react';
import Project from './MiniComponents/Project';

class Projects extends Component {
  render() {
    return (
      <div className="sec" id="projects">
        <h2 className="title center">MY PROJECTS</h2>
        <div className="projects">
          <Project projectName="Tribute Project" link="https://codepen.io/Mufaddal/pen/jewPMw/" />
          <Project projectName="Survey Project" link="https://codepen.io/Mufaddal/pen/Xxgmjv" />
          <Project projectName="Product Page Project" link="https://codepen.io/Mufaddal/pen/EdPJog" />
          <Project projectName="Document Project" link="https://codepen.io/Mufaddal/pen/OBNKOZ" />
          <Project projectName="Title" link="" />
          <Project projectName="Title" link="" />
        </div>
      </div>
    );
  }
}

export default Projects;