import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

export const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Professional, Clean, and Better output.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creative and Unique</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>High-quality work</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Friendly Support and Service</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Fast and active Delivery</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mobile-Friendly websites and landing pages</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Websites for All professions</p>
            </li>
          </ul>
        </article>

        {/* 




 */}

        {/* Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Fully responsive on mobile, tablet & laptop.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design unique and original graphic elements & icons.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Custom Website Design that will reflect the business in a
                distinctive way to engage your audiences
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Follow the style of another site you like.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Both e-commerce and non-ecommerce website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Any type of content can be inserted</p>
            </li>
          </ul>
        </article>

        {/* Bug Fixing */}
        <article className="service">
          <div className="service__head">
            <h3>Bug Fixing</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Fixed header/Sticky header on Scroll</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Font styles changed and Custom font add.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Elements Style Changes</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>CSS3 Animation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Loading Effect</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Rollover animation effect</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Page / Content layout changes</p>
            </li>
          </ul>
        </article>
        {/* end of ui */}
      </div>
    </section>
  );
};
