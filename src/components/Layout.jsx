import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  useEffect(() => {
    // Google Analytics tracking
    const handleLinkClick = (event) => {
      if (event.target.closest('a[target="_blank"]')) {
        const link = event.target.closest('a[target="_blank"]');
        event.preventDefault();
        const url = link.href;
        
        // Only run if gtag is defined
        if (typeof gtag === 'function') {
          gtag("event", "link_click", {
            event_category: "engagement",
            event_label: url,
            link_name: link.getAttribute("data-link-name") || "unknown"
          });
        }
        
        setTimeout(() => {
          window.open(url, "_blank");
        }, 300);
      }
    };

    document.addEventListener('click', handleLinkClick);
    
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return (
    <div className="container text-center">
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

const Footer = () => (
  <footer>
    © {new Date().getFullYear()} Antonio Archer.<br /> Full Stack Software Engineer
    <p>
      <strong>Email:</strong> <a href="mailto:adarcher21@gmail.com">adarcher21@gmail.com</a>
      <br />
      <strong>Phone:</strong> 267-225-6778
    </p>
  </footer>
);

export default Layout; 