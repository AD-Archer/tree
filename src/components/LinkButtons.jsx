const LinkButtons = () => {
  const links = [
    { 
      href: "https://www.antonioarcher.com", 
      icon: "fa-solid fa-globe", 
      text: "Visit my full site and see what I'm up to!", 
      name: "portfolio",
      image: "/personal/portfo.webp"
    },
    {
      href: "https://s.blinq.me/z9wgm5sYJfBo43d4NS0y?n=Antonio&bs=iw&ida_v=control",
      icon: "fas fa-clock",
      text: "Add me to your contacts",
      name: "timewise",
      image: "/personal/profile.webp"
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
    },
   
  ];

  return (
    <div className="links-container">
      {links.map((link, index) => (
        <a 
          key={index}
          href={link.href} 
          className={`link-btn ${link.image ? 'with-image' : ''}`}
          target="_blank" 
          rel="noopener noreferrer"
          data-link-name={link.name}
        >
          {link.image ? (
            <div className="link-btn-content featured-image">
              <div className="image-container">
                <img 
                  src={link.image} 
                  alt={`${link.text}`} 
                  className="link-featured-image" 
                />
              </div>
              <span>{link.text}</span>
              <i className="fas fa-chevron-right arrow-icon"></i>
            </div>
          ) : (
            <div className="link-btn-content">
              <i className={link.icon}></i>
              <span>{link.text}</span>
              <i className="fas fa-chevron-right"></i>
            </div>
          )}
        </a>
      ))}

      <style>
        {`
          .link-btn.with-image {
            display: flex;
            flex-direction: column;
          }
          
          .link-btn-content.featured-image {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
          }

          .image-container {
            width: 100%;
            max-width: 300px;
            margin: 0 auto;
          }

          .link-featured-image {
            width: 100%;
            height: auto;
            border-radius: 8px;
            object-fit: cover;
          }
        `}
      </style>
    </div>
  );
};

export default LinkButtons;