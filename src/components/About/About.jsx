import React from "react";
import "./About.css";
import Me from "../../asset/Me.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me_image">
            <img src={Me} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>

          <p>
            I am a full-stack (MERN) Web Developer located in Bangladesh. I love
            coding. While I'm doing coding I enjoy it. Also, I'm a quick
            learner. I love to be around positive thinkers, which makes me stay
            positive even in negative situations. I believe everything is an Art
            when you put your consciousness in it. You can connect with me via
            social links.
          </p>

          <a href="#contact" class="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
