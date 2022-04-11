import "./ContactItem.css";

function ContactItem({ href = "?", imgSrc = "", text = "not found" }) {
  return (
    <li>
      <a href={href}>
        <img src={imgSrc} alt="Contact" />
        {text}
      </a>
    </li>
  );
}

export default ContactItem;
