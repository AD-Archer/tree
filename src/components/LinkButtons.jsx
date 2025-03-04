const LinkButtons = () => {
  const links = [
    { 
      href: "https://www.antonioarcher.com", 
      icon: "fa-duotone fa-solid fa-globe", 
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
      text: "Link to view my living projects", 
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
          <i className={link.icon}></i> {link.text}
        </a>
      ))}
    </div>
  );
};

export default LinkButtons; 