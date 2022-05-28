import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_jejftbx",
      "template_bmlm3cg",
      form.current,
      "user_lKaRc1EEFlY9fQey6APqf"
    );
    e.target.reset().then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>
              mahmudulhasan
              <br />
              shohag219@gmail.com
            </h5>
            <a
              rel="noreferrer"
              target="_blank"
              href="mailto:mahmudulhasan
              
              shohag219@gmail.com"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Mahmudul Hasan</h5>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://m.me/moinulislam.joy.5 "
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+8801727789171</h5>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=8801727789171"
            >
              Send a message
            </a>
          </article>
        </div>

        {/* end of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="7"
          ></textarea>
          <button type="submit" class="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
