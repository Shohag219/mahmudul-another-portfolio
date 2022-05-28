import React from "react";
import CTA from "./CTA";
import me from "../../asset/My project.png";
import "./Header.css";
import { HeaderSocial } from "./HeaderSocial";
export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'am</h5>
        <h1>Mahmudul Hasan</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={me} alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};
