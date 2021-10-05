import React from "react";
import "./style.css";
import aboutMe from "./aboutMe.jpg";
import JavaScript from "./JavaScript.png";
import reactImage from "./reactImage.png";
import cssImage from "./cssImage.png";
import expressImage from "./expressImage.png";
import typeImage from "./typeImage.jpg";
import htmlImage from "./htmlImage.jpg";
import { BsCloudDownload } from "react-icons/bs";
function About() {
  return (
    <div className="about-us">
      <h2 data-text="About Me">About Me</h2>
     
      <div className="full-info">
        <div className="left-side">
          <div className="about-img">
            <img className="aboutMe" src={aboutMe} alt="" />
          </div>
          <button className="download-btn">
            Download CV
            <BsCloudDownload className="download-logo" />
          </button>
        </div>

        
        <div className="personal-info">
          <p>My Personal information</p>
          <p className="overviews">
            I am a highly motivated and hardworking Web Developer with an
            outgoing personality and a vast range of capabilities in Coding,
            debugging, and ready to excel and keep learning. As a basis I
            successfully completed the four academic year in Bachelor of Science
            in Computer Science and recently succeeded the Full stack Web & App
            development training at WBS Coding School.
          </p>
          <div className="personal-details">
            <div className="information">
              <p>Full Name</p>
              <p>Age</p>
              <p>Languages</p>
              <p>Nationality</p>
              <p>Location</p>
            </div>
            <div className="infor-details">
              <p>: Shukrullah Navid</p>
              <p>: 32</p>
              <p>: English, German, Farsi, Urdu</p>
              <p>: Afghan</p>
              <p>: Münster-Germany</p>
            </div>
          </div>

          </div>
         

          
        </div>

        <div className="service-section">
        <h2 data-text="Services..."> Services...</h2>

        <div className="skill-section">
          <div className="service-title">
            <img className="java-script" src={reactImage} alt="" />
            <p>ReactJs</p>
            <h3>
              React. js is an open-source JavaScript library that is used for
              building user interfaces specifically for single-page
              applications. It's used for handling the view layer for web and
              mobile apps. React also allows us to create reusable UI
              components. ... The main purpose of React is to be fast, scalable,
              and simple.
            </h3>
          </div>
          <div className="service-title">
            <img className="java-script" src={JavaScript} alt="" />
            <p>JavaScript</p>
            <h3>
              JavaScript is a scripting or programming language that allows you
              to implement complex features on web pages — every time a web page
              does more than just sit there and display static information for
              you to look at — displaying timely content updates, interactive
              maps, animated 2D/3D graphics, scrolling video jukeboxes, etc.
            </h3>
          </div>
          <div className="service-title">
            <img className="java-script" src={htmlImage} alt="" />
            <p>HTML</p>
            <h3>
              Hypertext Markup Language (HTML) is a computer language that makes
              up most web pages and online applications. A hypertext is a text
              that is used to reference other pieces of text, while a markup
              language is a series of markings that tells web servers the style
              and structure of a document.
            </h3>
          </div>
      
       
          <div className="service-title">
            <img className="java-script" src={cssImage} alt="" />
            <p>CSS</p>
            <h3>
              Cascading Style Sheets, fondly referred to as CSS, is a simple
              design language intended to simplify the process of making web
              pages presentable. CSS handles the look and feel part of a web
              page. Using CSS, you can control the color of the text, the style
              of fonts, the spacing between paragraphs, how columns are sized
              and laid out, what background images or colors are used.
            </h3>
          </div>
          <div className="service-title">
            <img className="java-script" src={expressImage} alt="" />
            <p>EXPRESS.JS</p>
            <h3>
              Express.js is a web application framework for Node.js. It provides
              various features that make web application development fast and
              easy which otherwise takes more time using only Node.js.
              Express.js is based on the Node.js middleware module called
              connect which in turn uses http module. So, any middleware which
              is based on connect will also work with Express.js.
            </h3>
          </div>
          <div className="service-title">
            <img className="java-script" src={typeImage} alt="" />
            <p>TypeScript</p>
            <h3>
              TypeScript is a super set of JavaScript. TypeScript builds on top
              of JavaScript. First, you write the TypeScript code. Then, you
              compile the TypeScript code into plain JavaScript code using a
              TypeScript compiler. Once you have the plain JavaScript code, you
              can deploy it to any environments that JavaScript runs. TypeScript
              files use the .ts extension rather than the .js extension of
              JavaScript files.
            </h3>
          </div>
        </div>



      </div>

      
     
      
    </div>
  );
}

export default About;
