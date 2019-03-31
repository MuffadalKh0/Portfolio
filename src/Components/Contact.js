import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="contact sec">
        <h2 className="title center">CONTACT</h2>
        <div className="socials">
          <li><i class="fas fa-mobile nudge-mobile"></i>   Number: 01234567890</li>
          <li><i class="fas fa-envelope nudge"></i> Email: mufaddalkhozema53@gmail.com</li>
          <li><i class="fab fa-github nudge"></i>   Github: <a href="https://github.com/MuffadalKh0" rel="noopener noreferrer" target="_blank">MufaddalKh0</a></li>
          <li><i class="fab fa-twitter nudge"></i>  Twitter: <a href="https://twitter.com/KhozemaMufaddal" rel="noopener noreferrer" target="_blank">@KhozemaMufaddal</a></li>
        </div>
      </div>
    );
  }
}

export default Contact;