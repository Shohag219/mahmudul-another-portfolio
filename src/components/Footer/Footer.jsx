import React from "react";
import "./Footer.css";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

export const Footer = () => {
  return (
    <section id="footer">
      <footer>
        <a href="#" className="footer__logo">
          Mahmudul Hasan
        </a>

        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonial">Testimonial</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://www.facebook.com/moinulislam.joy.5">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/in/mahmudul219/">
            <FaLinkedinIn />
          </a>
          <a href="https://twitter.com/mahmudul219">
            <IoLogoTwitter />
          </a>
        </div>
        <div className="footer__copyright">
          <small>&copy; Mahmudul Hasan. All rights reserved.</small>
        </div>
      </footer>
    </section>
  );
};
