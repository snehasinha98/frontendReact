import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="profile-container">
          <img
            src="https://media.licdn.com/dms/image/v2/D5635AQG4IV9zZxiS7A/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1735767100233?e=1737270000&v=beta&t=n8wy5hOHTOFBRBjODIu1RURLKRRIx-rRQVhv7RNtbZo" // Replace with your actual profile image URL
            alt="Sneha Sinha"
            className="profile-img"
          />
          <h2 className="about-heading">About Me</h2>
        </div>
        <p className="about-text">
          Hi, I'm <strong>Sneha Sinha</strong>, a passionate Front-End Developer
          with 1.8 years of experience in building responsive and user-focused
          web applications. I have expertise in
          <strong> React.js</strong>, <strong>JavaScript</strong>,{" "}
          <strong>HTML/CSS</strong>, and more. I love problem-solving and
          building intuitive, scalable web apps.
        </p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="social-btn">LinkedIn</button>
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="social-btn">GitHub</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
