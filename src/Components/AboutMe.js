import React, { Component } from 'react';
import Me from '../Media/Me.jpg';

class AboutMe extends Component {
  render() {
    return (
        <div className="about-me sec">
            <img className="me-img" src={Me} alt="My Face Should've been here." />
            <div className="me-info">
                <h2 class="title">ABOUT ME</h2>
                <p>Hey, I am Mufaddal Khozema a 16 year old boy. I like to do Design, Web Development, Programming and stuff. I live in Pakistan and am a student. I try to be the best of myself everyday and keep others happy</p>
                <br />
                <p>I am currently a pre-college student at <a class="underline" rel="noopener noreferrer" target="_blank" href="http://saifiyahboysschool.edu.pk/">Safiayah Boys High School</a></p>
            </div>
        </div>
    );
  }
}

export default AboutMe;