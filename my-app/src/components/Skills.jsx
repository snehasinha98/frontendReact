import React from "react";
import "./Skills.css"; // Make sure to link the custom CSS

// Import the images (icons) directly from assets
import reactIcon from "../assets/icons/react.svg";
import javascriptIcon from "../assets/icons/javascript.svg";
import cssIcon from "../assets/icons/css.svg";
import tailwindIcon from "../assets/icons/tailwind.svg";
import reduxIcon from "../assets/icons/redux.svg";
// import sassIcon from "../assets/icons/sass.svg";
// import nodejsIcon from "../assets/icons/nodejs-icon.svg";
// import expressIcon from "../assets/icons/express-icon.svg";
import azuredevopsIcon from "../assets/icons/azure.svg";
import gitIcon from "../assets/icons/git.svg";
// import powerautomateIcon from "../assets/icons/powerautomate-icon.svg";
import tableauIcon from "../assets/icons/tableau.svg";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-container">
        {/* Front-End Technologies */}
        <div className="skills-category">
          <h3>Front-End Technologies</h3>
          <div className="skills-list">
            <div className="skill-card">
              <img src={reactIcon} alt="React.js" className="skill-icon" />
              <span>React.js</span>
            </div>
            <div className="skill-card">
              <img
                src={javascriptIcon}
                alt="JavaScript"
                className="skill-icon"
              />
              <span>JavaScript</span>
            </div>
            <div className="skill-card">
              <img src={cssIcon} alt="CSS" className="skill-icon" />
              <span>CSS</span>
            </div>
            <div className="skill-card">
              <img
                src={tailwindIcon}
                alt="Tailwind CSS"
                className="skill-icon"
              />
              <span>Tailwind CSS</span>
            </div>
            <div className="skill-card">
              <img src={reduxIcon} alt="Redux" className="skill-icon" />
              <span>Redux</span>
            </div>
            <div className="skill-card">
              {/* <img src={sassIcon} alt="SCSS" className="skill-icon" /> */}
              <span>SCSS</span>
            </div>
          </div>
        </div>

        {/* Back-End Technologies */}
        <div className="skills-category">
          <h3>Back-End Technologies</h3>
          <div className="skills-list">
            <div className="skill-card">
              {/* <img src={nodejsIcon} alt="Node.js" className="skill-icon" /> */}
              <span>Node.js</span>
            </div>
            <div className="skill-card">
              {/* <img src={expressIcon} alt="Express.js" className="skill-icon" /> */}
              <span>Express.js</span>
            </div>
          </div>
        </div>

        {/* DevOps & Cloud */}
        <div className="skills-category">
          <h3>DevOps & Cloud</h3>
          <div className="skills-list">
            <div className="skill-card">
              <img
                src={azuredevopsIcon}
                alt="Azure DevOps"
                className="skill-icon"
              />
              <span>Azure DevOps</span>
            </div>
            <div className="skill-card">
              <img src={gitIcon} alt="Git" className="skill-icon" />
              <span>Git</span>
            </div>
            <div className="skill-card">
              {/* <img
                src={powerautomateIcon}
                alt="Power Automate"
                className="skill-icon"
              /> */}
              <span>Power Automate</span>
            </div>
          </div>
        </div>

        {/* Data Analytics Tools */}
        <div className="skills-category">
          <h3>Data Analytics Tools</h3>
          <div className="skills-list">
            <div className="skill-card">
              <img src={tableauIcon} alt="Tableau" className="skill-icon" />
              <span>Tableau</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
