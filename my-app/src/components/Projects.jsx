import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div>
        <h3>SIMOPs - Schedule Optimizer</h3>
        <p>
          A responsive web application for visualizing rig and frac schedules.
          Achieved significant cost savings.
        </p>
        <p>
          <strong>Technologies:</strong> React.js, Redux, MySQL, Azure DevOps
        </p>
        <a
          href="https://github.com/your-github-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Code
        </a>
      </div>
      <div>
        <h3>Frac Water Optimizer</h3>
        <p>
          Developed a dashboard to visualize fracking optimization results,
          reducing water usage by 40%.
        </p>
        <p>
          <strong>Technologies:</strong> React.js, Tailwind CSS, .NET Entity
          Framework
        </p>
        <a
          href="https://github.com/your-github-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Code
        </a>
      </div>
    </section>
  );
};

export default Projects;
