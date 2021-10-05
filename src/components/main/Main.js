import React from "react";
import Particles from "react-particles-js";
import ParticlesConfig from "./Particles-Config";
import { AiOutlineGithub } from "react-icons/ai";
import { SiLinkedin } from "react-icons/si";
import "./style.css";
function Main() {
  return (
    <div className="container">
      <Particles
        className="particle-parts"
        params={ParticlesConfig}
      ></Particles>

      <div className="typography-text">
        <div className="text-box">
        <h6>Hi, I'm Shukrullah Navid</h6>
       
        </div>
        <p>
          From an early age, I’ve always been deeply interested in computing and
          completed my Bachelor's degree in Computer Science.
          <br /> I can always remember the feeling of wanting to know just how
          computers worked, why they worked, and what else they could do.
          <br /> Through the setting up of my own business and its subsequent
          running, I have learned many things. These include how to balance
          tasks effectively, how critical teamwork can be, and how to delegate
          tasks to get the job done quickly and efficiently.
          <br /> As well as spending time both studying, working and helping
          others to run the business I understand the importance of having time
          to relax.
          <br />
          The hobbies that I try to make time for are playing volleyball,
          football and also playing chess.
        </p>
        <div className="icons">
          <a href="https://github.com/shunavid" className="gutHub-icon">
            <AiOutlineGithub className="gitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/shukrullah-navid-3a49b3190
"
            className="linkedIn-logo"
          >
            <SiLinkedin className="linkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;
