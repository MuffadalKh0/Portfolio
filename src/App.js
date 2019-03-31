import React, { Component } from 'react';
import OAANav from './Components/OAANav';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <OAANav />
        <div className="contianer">
          <Header />
          <hr id="about-me" />
          <AboutMe />
          <hr id="projects" />
          <Projects />
          <hr id="socials" />
          <Contact />
          <hr />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;