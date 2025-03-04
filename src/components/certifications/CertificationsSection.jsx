import './CertificationsSection.css';

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
    <section id="certifications" className="certifications container">
      <h2>Certifications</h2>
      <div className="cert-list">
        {certifications.map((cert, index) => (
          <div key={index}>
            <div 
              className="cert-card"
              data-bs-toggle="modal"
              data-bs-target="#certModal"
              data-title={cert.title}
              data-img={cert.img}
              data-issuer={cert.issuer}
              data-date={cert.date}
              data-link={cert.link}
              data-extra-info={cert.extraInfo}
            >
              <div className="cert-img-container">
                <img src={cert.img} alt={cert.title} className="cert-img" />
              </div>
              <div className="cert-text">
                <h3>{cert.title}</h3>
                <div>
                  <p>{cert.issuer}</p>
                  <p>{cert.date.split('(')[0]}</p>
                  {cert.extraInfo && <p className="extra-info">{cert.extraInfo}</p>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection; 