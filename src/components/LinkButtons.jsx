const LinkButtons = () => {
  const links = [
    { 
      href: "https://www.antonioarcher.com", 
      icon: "fa-solid fa-globe", 
      text: "Personal Site", 
      name: "portfolio" 
    },
    { 
      href: "https://www.github.com/ad-archer", 
      icon: "fab fa-github", 
      text: "GitHub Profile", 
      name: "github" 
    },
    { 
      href: "https://www.linkedin.com/in/antonio-archer/", 
      icon: "fab fa-linkedin", 
      text: "LinkedIn Profile", 
      name: "linkedin" 
    },
    { 
      href: "/resume.pdf", 
      icon: "fas fa-file-alt", 
      text: "View Resume", 
      name: "resume" 
    },
    { 
      href: "https://www.antonioarcher.com/projects", 
      icon: "fas fa-code", 
      text: "View My Projects", 
      name: "projects" 
    }
  ];

  return (
    <div className="links-container">
      {links.map((link, index) => (
        <a 
          key={index}
          href={link.href} 
          className="link-btn" 
          target="_blank" 
          rel="noopener noreferrer"
          data-link-name={link.name}
        >
          <div className="link-btn-content">
            <i className={link.icon}></i>
            <span>{link.text}</span>
          </div>
          <i className="fas fa-chevron-right"></i>
        </a>
      ))}
    </div>
  );
};

export default LinkButtons; 