import React from "react";
import "./Portfolio.css";
import { data } from "../../data/WorkData";

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ name, description, image, demo, github }, id) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={name} />
              </div>
              <h3>{name}</h3>
              <h5>{description}</h5>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  rel="noreferrer"
                  target="_blank"
                  className="btn"
                >
                  Github
                </a>
                <a
                  href={demo}
                  rel="noreferrer"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Live Link
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
