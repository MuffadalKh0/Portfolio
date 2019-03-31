import React, { Component } from 'react';

class OAANave extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      navState: "" 
    };
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
}

  handleScroll = event => {
    if(this.state.navState === ""){
      this.setState({
        navState: "opaque"
      })
      console.log("Scroll")
    }
  }

  render() {
    return (
      <div>
        <nav className={this.state.navState}>
          <li><a href="#header" class="nav-link">Home</a></li>
          <li><a href="#about-me" class="nav-link">About Me</a></li>
          <li><a href="#projects" class="nav-link">Projects</a></li>
          <li><a href="#socials" class="nav-link">Socials</a></li>
        </nav>
      </div>
    );
  }
}

export default OAANave;
