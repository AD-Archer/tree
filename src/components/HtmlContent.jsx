import React from 'react';
import './HtmlContent.css'; // Assuming you move your CSS to this file

const HtmlContent = () => {
  return (
    <div>
      <div className="container text-center">
        <img src="/personal/antonioarcher.jpeg" alt="Antonio Archer" className="profile-img" />
        <h1>Antonio Archer</h1>
        <div className="bio">
          <p>Full Stack Software Engineer</p>
          <p>Credited in Reactjs, Javascript, and certified in Python. working hard to make tech fun and practical to improve human lives</p>
        </div>
        <div className="social-icons">
          <a href="mailto:adarcher21@gmail.com" className="social-icon" title="Email">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="tel:+12672256778" className="social-icon" title="Phone" id="phone">
            <i className="fas fa-phone"></i>
          </a>
          <a href="https://www.instagram.com/antonio_darcher/" className="social-icon" target="_blank" title="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.twitter.com/ad_archer_" className="social-icon" target="_blank" title="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <div className="links-container">
          <a href="https://www.antonioarcher.com" className="link-btn" target="_blank" data-link-name="portfolio">
            <i className="fa-duotone fa-solid fa-globe"></i> Personal Site
          </a>
          <a href="https://www.github.com/ad-archer" className="link-btn" target="_blank" data-link-name="github">
            <i className="fab fa-github"></i> GitHub Profile
          </a>
          <a href="https://www.linkedin.com/in/antonio-archer/" className="link-btn" target="_blank" data-link-name="linkedin">
            <i className="fab fa-linkedin"></i> LinkedIn Profile
          </a>
          <a href="https://www.antonioarcher.com/projects" className="link-btn" target="_blank" data-link-name="projects">
            <i className="fas fa-code"></i> Link to view my living projects
          </a>
        </div>
        <section id="certifications" className="certifications container">
          <h2>Certifications</h2>
          <div className="cert-list">
            <div className="cert-card" data-bs-toggle="modal" data-bs-target="#certModal" data-title="React Certification" data-img="/certs/codeacademy.jpeg" data-issuer="Codecademy" data-date="Issued Feb 2025" data-link="https://www.codecademy.com/profiles/Ad-Archer/certificates/af00e5032d0a68cc84879983f5d8333b">
              <div className="cert-img-container">
                <img src="/certs/codeacademy.jpeg" alt="React Certification" className="cert-img" />
              </div>
              <div className="cert-text">
                <h3>React Certification</h3>
                <p>Codecademy</p>
                <p>Issued Feb 2025</p>
              </div>
            </div>
            <div className="cert-card" data-bs-toggle="modal" data-bs-target="#certModal" data-title="Academy Accreditation - Generative AI Fundamentals" data-img="/certs/databricks.jpeg" data-issuer="Databricks" data-date="Issued Nov 2024 (Expires Nov 2026)" data-link="https://credentials.databricks.com/03505993-f39c-4a0e-9b60-d63684c156b6">
              <div className="cert-img-container">
                <img src="/certs/databricks.jpeg" alt="Generative AI Fundamentals" className="cert-img" />
              </div>
              <div className="cert-text">
                <h3>Academy Accreditation - Generative AI Fundamentals</h3>
                <p>Databricks</p>
                <p>Issued Nov 2024</p>
                <p>(Expires Nov 2026)</p>
              </div>
            </div>
            <div className="cert-card" data-bs-toggle="modal" data-bs-target="#certModal" data-title="PCEP™ – Certified Entry-Level Python Programmer" data-img="/certs/python.jpeg" data-issuer="Python Institute" data-date="Issued Jun 2024" data-link="https://www.credly.com/badges/c97d5448-24e6-4f37-80c1-b83ab768bbdd/linked_in_profile">
              <div className="cert-img-container">
                <img src="/certs/python.jpeg" alt="Python Certification" className="cert-img" />
              </div>
              <div className="cert-text">
                <h3>PCEP™ – Certified Entry-Level Python Programmer</h3>
                <p>Python Institute - Issued Jun 2024</p>
              </div>
            </div>
          </div>
        </section>
        <footer>© 2024 Antonio Archer.<br /> Full Stack Software Engineer
          <p>
            <strong>Email:</strong> <a href="mailto:adarcher21@gmail.com">adarcher21@gmail.com</a>
            <br />
            <strong>Phone:</strong> 267-225-6778
          </p>
        </footer>
      </div>
    </div>
  );
};

export default HtmlContent;