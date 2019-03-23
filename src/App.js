import React, { Component } from 'react';
import OAANav from './Components/OAANav';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';
import Project from './Components/MiniComponents/Project';

class App extends Component {
  render() {
    return (
      <div>
        <OAANav />
        <div className="contianer">
          <Header />
          <AboutMe />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;