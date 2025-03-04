const SocialIcons = () => {
  const socialLinks = [
    { href: "mailto:adarcher21@gmail.com", icon: "fas fa-envelope", title: "Email" },
    { href: "tel:+12672256778", icon: "fas fa-phone", title: "Phone", id: "phone" },
    { href: "https://www.instagram.com/antonio_darcher/", icon: "fab fa-instagram", title: "Instagram", target: "_blank" },
    { href: "https://www.twitter.com/ad_archer_", icon: "fab fa-twitter", title: "Twitter", target: "_blank" }
  ];

  return (
    <div className="social-icons">
      {socialLinks.map((link, index) => (
        <a 
          key={index}
          href={link.href} 
          className="social-icon" 
          title={link.title}
          id={link.id}
          target={link.target}
          rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
        >
          <i className={link.icon}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons; 