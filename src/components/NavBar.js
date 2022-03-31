import React from 'react';

class NavBar extends React.Component {
    constructor(props) {
      super(props);
    
    }

    render() {
      return (

        <nav id="navbar">
      <ul>
        <li>
          <a href="#welcome-section">Home</a>
        </li>
        <li>
          <a href="#projects">My Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>


    </nav>

        );
    }
  };

  export default NavBar;