import React from "react";
import "./style.css";
import { FcGraduationCap } from "react-icons/fc";
import { MdWork } from "react-icons/md";
function Resume() {
  return (
    <div className="resume">
      {/* <h3>Tech Skills</h3> */}
      <div className="tech-content">
        <h5>Tech Skills</h5>
        <h5>Tech Skills</h5>
      </div>
      <div className="main-page">
        <div className="left-resume">
          <div className="overall">
            <h5>JavaScript</h5>
            <div className="progressing">
              <p>60%</p>
              <div className="progress">
                <div className="progress-bar"></div>
              </div>
            </div>
          </div>

          <div className="overall">
            <h5>HTML</h5>
            <div className="progressing">
              <p>80%</p>
              <div className="progress">
                <div className="progress-bar1"></div>
              </div>
            </div>
          </div>
          <div className="overall">
            <h5>CSS</h5>
            <div className="progressing">
              <p>80%</p>
              <div className="progress">
                <div className="progress-bar2"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="right-resume">
          <div className="overall">
            <h5>TypeScript</h5>

            <div className="progressing">
              <p>50%</p>
              <div className="progress">
                <div className="progress-bar3"></div>
              </div>
            </div>
          </div>
          <div className="overall">
            <h5>React JS</h5>
            <div className="progressing">
              <p>85%</p>
              <div className="progress">
                <div className="progress-bar4"></div>
              </div>
            </div>
          </div>

          <div className="overall">
            <h5>Express JS</h5>
            <div className="progressing">
              <p>60%</p>
              <div className="progress">
                <div className="progress-bar5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="resume-content">
        <h5>Resume</h5>
        <h5>Resume</h5>
      </div>
      <div className="education-background">
        <div className="qualify">
          <div>
            <FcGraduationCap size="40" className="graduation" />
          </div>
          <p>
            <b className="main-education">Educational Qualification</b>
          </p>
        </div>
        <div className="qualify">
          <p>
            <b className="main-job"> Full Stack Web and App Development,</b>WBS
            Coding School, Berlin, Germany Project based, practice oriented,
            remote, collaborative coding training.
            <br />
            02/2021 - 06/2021
          </p>
        </div>
        <div className="qualify">
          <p>
            <b className="main-job">
              {" "}
              Bachelor of Science in Computer Science,
            </b>{" "}
            National University of Modern Languages,Islamabad, Pakistan <br />
            01 /2012 - 01/2016
          </p>
        </div>
        <div className="qualify">
          <MdWork color="#91BAD6" size="40" className="graduation" />
          <p>
            <b className="main-education">Employments History</b>
          </p>
        </div>
        <div className="qualify">
          <p>
            <b className="main-job">Shipping Instructor,</b> Amazon Logistic
            Gmbh, Oelde <br />
            08/2021 - 01/2021
            <ul className="unordered">
              <li>instructed new employees</li>
              <li>Accepted and Organized goods</li>
            </ul>
          </p>
        </div>
        <div className="qualify">
          <p>
            <b className="main-job">Translator,</b> International Organization
            of Migration (IOM), Greece
            <br /> 08/2021 - 01/2021
            <ul className="unordered">
              <li>
                Facilitated communication between social worker, lawyers, and
                refugees
              </li>
              <li>Interpreted between the beneficiaries</li>
              <li>Translated documents related to the Program</li>
            </ul>
          </p>
        </div>
        <div className="qualify">
          <p>
            <b className="main-job">English Teacher,</b> One happy Family,
            Lesbos, Greece
            <br /> 10/2017 - 08/2018
            <ul className="unordered">
              <li>Adult School, Mentor(English - Farsi Language)</li>
              <li>
                instructed visitors in IT and monitored the "Cyber Coffee"
              </li>
              <li>
                Managed the classroom by incorporating motivating activities and
                positive reinforcement of ownership and cooperative behavior
              </li>
            </ul>
          </p>
        </div>
        <div className="qualify">
          <p>
            <b className="main-job">C#/ASP.NET Developer,</b> Ministry of Communication and IT,
            Kabul, Afghanistan
            <br /> 04/2016 - 04/2017
            <ul className="unordered">
              <li>
                Developed, tested, implemented and maintained application Software
              </li>
              <li>
                Collaborated with team to design and implement features
              </li>
              <li>
                Contributed to technical design documentation
              </li>
              <li>
                Created and documented software tools required by artists or other developers 
              </li>
            </ul>
          </p>
        </div>
        <div className="qualify">
          <p>
            <b className="main-job">Internship .Net Developer, </b> 
            Enterprise Cyber Solutions, Islamabad, Pakistan
            <br /> 02/2014 - 11/2014
            <ul className="unordered">
              <li>Performed routine maintenance of existing applications </li>
              <li>Developed and maintained code documentation, procedures and policies </li>
              <li>
               Installed, Configured and managed application code, database and related software Components
              </li>
              <li>Evaluated the performance of the stabilization team</li>
              <li>Troubleshoot application and Database issues </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
