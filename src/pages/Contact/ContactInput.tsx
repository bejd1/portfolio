import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [messageError, setMessageError] = useState<string | null>(null);

  const validateForm = () => {
    const nameInput = form.current?.elements.namedItem(
      "user_name"
    ) as HTMLInputElement;
    const emailInput = form.current?.elements.namedItem(
      "user_email"
    ) as HTMLInputElement;
    const messageInput = form.current?.elements.namedItem(
      "message"
    ) as HTMLTextAreaElement;

    let isValid = true;

    if (nameInput.value.length < 1) {
      setNameError("Name cannot be empty");
      isValid = false;
    } else {
      setNameError(null);
    }

    if (!emailInput.value.includes("@")) {
      setEmailError("Invalid email address");
      isValid = false;
    } else {
      setEmailError(null);
    }

    if (messageInput.value.length < 1) {
      setMessageError("Message cannot be empty");
      isValid = false;
    } else {
      setMessageError(null);
    }

    return isValid;
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm(
          "service_imiuhxz",
          "template_j2mbdmj",
          form.current!,
          "eMwMB8bWUiEqpL6Xh"
        )
        .then(
          (result) => {
            console.log(result.text);
            if (form.current) {
              form.current.reset();
            }
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input
          type="name"
          name="user_name"
          className="form-name"
          placeholder="Name"
        />
        {nameError && <span>{nameError}</span>}

        <label>Email</label>
        <input
          type="email"
          name="user_email"
          className="form-email"
          placeholder="Email"
        />
        {emailError && <span>{emailError}</span>}

        <label>Message</label>
        <textarea
          name="message"
          className="form-textarea"
          placeholder="Your Message"
          rows={4}
        />
        {messageError && <span>{messageError}</span>}
        <input type="submit" value="Send" className="form-btn" />
      </form>
    </div>
  );
};
