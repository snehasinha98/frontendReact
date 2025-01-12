import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>If you would like to get in touch, feel free to reach out to me:</p>
      <ul>
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:jobsnehasinha@gmail.com">jobsnehasinha@gmail.com</a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Projects
          </a>
        </li>
        <li>
          <strong>Phone:</strong> +91 9036322490
        </li>
      </ul>
    </section>
  );
};

export default Contact;
