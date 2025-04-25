import { useEffect } from 'react';
import PropTypes from 'prop-types';

// Define gtag as a global function on the window object
window.gtag = window.gtag || function () {};

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
    <div className="container animate-fade-in">
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
    <p>© {new Date().getFullYear()} Antonio Archer</p>
    <p>Full Stack Software Engineer</p>
    <p>
      <strong>Email:</strong>{" "}
      <a href="mailto:adarcher21@gmail.com">adarcher21@gmail.com</a>
    </p>
    <p>
      <strong>Phone:</strong>{" "}
      <a href="tel:+12672256778">267-225-6778</a>
    </p>
  </footer>
);

export default Layout; 