import React, { Component } from 'react';
import Project from './MiniComponents/Project';

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      myProjects : [
        {
          name: "Tribute Project",
          link: "https://codepen.io/Mufaddal/pen/jewPMw/"
        },
        {
          name: "Survey Project",
          link: "https://codepen.io/Mufaddal/pen/Xxgmjv"
        },
        {
          name: "Product Page Project",
          link: "https://codepen.io/Mufaddal/pen/EdPJog"
        },
        {
          name: "Document Project",
          link: "https://codepen.io/Mufaddal/pen/OBNKOZ"
        },
        {
          name: "Title",
          link: ""
        },
        {
          name: "Title",
          link: ""
        }
      ]
    }
  } 
  render() {
    return (
      <div className="sec">
        <h2 className="title center">MY PROJECTS</h2>
        <div className="projects">
          {
            this.state.myProjects.map(
              (proj) => {
                return (
                  <Project projectName={proj.name} link={proj.link} />
                )
              }
            )
          }
        </div>
      </div>
    );
  }
}

export default Projects;