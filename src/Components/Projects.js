import React, { Component } from 'react';
import Project from './MiniComponents/Project';

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      myProjects : [
        {
          name: "Awesome Calculator Project",
          link: "https://awesomecalculator2.firebaseapp.com/"
        },
        {
          name: "General Mathametics Project",
          link: "https://webassignmentt.firebaseapp.com/"
        },
        {
          name: "Quiz Project",
          link: "https://quiz-javascript.firebaseapp.com/"
        },
        {
          name: "Survey Project",
          link: "https://codepen.io/Mufaddal/pen/Xxgmjv",
          on: "Codepen"
        },
        {
          name: "Document Project",
          link: "https://codepen.io/Mufaddal/pen/OBNKOZ",
          on: "Codepen"
        },
        {
          name: "Classy Clock",
          link: "https://classy-clock.firebaseapp.com/"
        },
        {
          name: "Product Page Project",
          link: "https://codepen.io/Mufaddal/pen/EdPJog",
          on: "Codepen"
        },
        {
          name: "Tribute Project",
          link: "https://codepen.io/Mufaddal/pen/jewPMw/",
          on: "Codepen"
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
                  <Project projectName={proj.name} link={proj.link} on={proj.on} />
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