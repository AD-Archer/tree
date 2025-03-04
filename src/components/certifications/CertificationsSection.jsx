import React from 'react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "React Certification",
      img: "/certs/codeacademy.jpeg",
      issuer: "Codecademy",
      date: "Issued Feb 2025",
      link: "https://www.codecademy.com/profiles/Ad-Archer/certificates/af00e5032d0a68cc84879983f5d8333b"
    },
    {
      title: "Academy Accreditation - Generative AI Fundamentals",
      img: "/certs/databricks.jpeg",
      issuer: "Databricks",
      date: "Issued Nov 2024",
      link: "https://credentials.databricks.com/03505993-f39c-4a0e-9b60-d63684c156b6",
      extraInfo: "(Expires Nov 2026)"
    },
    {
      title: "PCEP™ – Certified Entry-Level Python Programmer",
      img: "/certs/python.jpeg",
      issuer: "Python Institute",
      date: "Issued Jun 2024",
      link: "https://www.credly.com/badges/c97d5448-24e6-4f37-80c1-b83ab768bbdd/linked_in_profile"
    }
  ];

  return (
    <section className="certifications">
      <h2>Certifications</h2>
      <div className="cert-list">
        {certifications.map((cert, index) => (
          <a 
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card"
            data-link-name={`cert-${index}`}
          >
            <div className="cert-img-container">
              <img 
                src={cert.img} 
                alt={cert.title} 
                className="cert-img" 
              />
            </div>
            <div className="cert-info">
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              <p>{cert.date}</p>
              {cert.extraInfo && (
                <p><em>{cert.extraInfo}</em></p>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection; 