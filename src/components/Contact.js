import React from 'react';
import ReactDOM from 'react-dom';

class contact extends React.Component {
    constructor(props) {
      super(props);
    
    }

    render() {
      return (
        <section id="contact">
      <div>
        <ul>
          <li><a href="https://github.com/FrancoRodriguez99"><img src="https://img.icons8.com/windows/452/github.png" alt="GitHub" />GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/juan-franco-rodriguez-32207b18a/"><img src="https://img.icons8.com/ios-filled/452/linkedin.png" alt="Linkedin" />Linkedin</a></li>
          <li><a href="mailto: juanfrancorodriguez99@gmail.com"><img src="https://img.icons8.com/external-nawicon-glyph-nawicon/452/external-email-communication-nawicon-glyph-nawicon-2.png" alt="email" />Email</a></li>
          <li><a href="https://wa.me/542235450046"><img src="https://img.icons8.com/ios-filled/452/whatsapp--v1.png" alt="whats app" />WhatsApp</a></li>

        </ul>
      </div>
    </section>

      );
    }
  };

  export default contact;