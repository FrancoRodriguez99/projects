import "./Contact.css";
import ContactItem from "../ContactItem/ContactItem";
import { useLanguage } from "../../hooks/useLanguage";
import { useSelector } from "react-redux";

function Contact() {
  const langstring = useSelector((state) => state.lang.lang);
  const { contact } = useLanguage(langstring);
  return (
    <section id="contact">
      <div>
        <ul>
          <ContactItem
            href="https://github.com/FrancoRodriguez99"
            imgSrc="https://img.icons8.com/windows/452/github.png"
            text={contact[0]}
          />
          <ContactItem
            href="https://www.linkedin.com/in/juan-franco-rodriguez-32207b18a/"
            imgSrc="https://img.icons8.com/ios-filled/452/linkedin.png"
            text={contact[1]}
          />
          <ContactItem
            href="mailto: juanfrancorodriguez99@gmail.com"
            imgSrc="https://img.icons8.com/external-nawicon-glyph-nawicon/452/external-email-communication-nawicon-glyph-nawicon-2.png"
            text={contact[2]}
          />
          <ContactItem
            href="https://wa.me/542235450046"
            imgSrc="https://img.icons8.com/ios-filled/452/whatsapp--v1.png"
            text={contact[3]}
          />
        </ul>
      </div>
    </section>
  );
}

export default Contact;
