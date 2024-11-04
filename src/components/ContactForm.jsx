import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./ContactForm.css";

export const ContactForm = () => {
  const [isPrivacyPolicyAccepted, setIsPrivacyPolicyAccepted] = useState(false);
  const [state, handleSubmit] = useForm("xpwagqpd"); // Ersetze mit deiner tatsächlichen Formular-ID
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [mathError, setMathError] = useState("");

  // Generiere zufällige Zahlen, wenn die Komponente geladen wird
  useEffect(() => {
    generateRandomNumbers();
  }, []);

  const generateRandomNumbers = () => {
    const newNum1 = Math.floor(Math.random() * 10) + 1; // Zahl zwischen 1 und 10
    const newNum2 = Math.floor(Math.random() * 10) + 1;
    setNum1(newNum1);
    setNum2(newNum2);
  };

  const validateMathAnswer = () => {
    const correctAnswer = num1 + num2;
    if (parseInt(userAnswer) === correctAnswer) {
      setMathError("");
      return true;
    } else {
      setMathError("Die Antwort auf die Matheaufgabe ist falsch.");
      return false;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!isPrivacyPolicyAccepted) {
      alert("Bitte akzeptieren Sie die Datenschutzerklärung, um fortzufahren.");
      return;
    }

    if (!validateMathAnswer()) {
      return;
    }

    handleSubmit(e);
  };

  if (state.succeeded) {
    return (
      <div className="message-sent contact-form">
        <p>Vielen Dank! Ihre Nachricht wurde gesendet.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        id="user_name"
        placeholder="Name"
        required
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <input
        type="email"
        name="email"
        id="user_email"
        placeholder="E-Mail"
        required
      />
      <ValidationError prefix="E-Mail" field="email" errors={state.errors} />

      <textarea name="message" id="message" placeholder="Nachricht" required />
      <ValidationError
        prefix="Nachricht"
        field="message"
        errors={state.errors}
      />

      {/* Matheaufgabe */}
      <div className="math-challenge">
        <label htmlFor="mathAnswer">
          Was ist {num1} + {num2}? *
        </label>
        <input
          type="number"
          name="mathAnswer"
          id="mathAnswer"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          required
        />
        {mathError && <p className="error-message">{mathError}</p>}
      </div>

      <div>
        <input
          type="checkbox"
          name="privacyPolicy"
          id="privacyPolicy"
          checked={isPrivacyPolicyAccepted}
          onChange={() => setIsPrivacyPolicyAccepted(!isPrivacyPolicyAccepted)}
          required
        />
        <label htmlFor="privacyPolicy">
          Ich habe die Datenschutzerklärung gelesen und akzeptiere sie.
        </label>
      </div>

      <button
        type="submit"
        disabled={state.submitting || !isPrivacyPolicyAccepted}
      >
        Senden
      </button>

      {/* Allgemeine Fehlermeldungen */}
      {state.errors && state.errors.length > 0 && (
        <div className="form-errors">
          {state.errors.map((error, index) => (
            <p key={index}>{error.message}</p>
          ))}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
