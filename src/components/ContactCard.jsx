import React, { forwardRef } from "react";
import "./ContactCard.css";
import ContactForm from "./ContactForm";

const ContactCard = forwardRef((props, ref) => {
  return (
    <div className="contact-card" ref={ref}>
      <div className="contact-card-header">
        <h2>Kontakt</h2>
      </div>
      <div className="contact-card-body">
        <ContactForm />
      </div>
    </div>
  );
});

export default ContactCard;
