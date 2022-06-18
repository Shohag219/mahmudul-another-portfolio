import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

export const HeaderSocial = () => {
  return (
    <div className="header__social">
      <a
        href="https://www.linkedin.com/in/mahmudul219/"
        rel="noreferrer"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Shohag219" rel="noreferrer" target="_blank">
        <FaGithubSquare />
      </a>
      <a
        href="https://twitter.com/mahmudul219"
        rel="noreferrer"
        target="_blank"
      >
        <AiFillTwitterCircle />
      </a>
    </div>
  );
};
