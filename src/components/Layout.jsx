/* global gtag */ // Add this comment to inform ESLint about the global variable
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { QRCodeSVG } from 'qrcode.react'; // Import QRCodeSVG

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
      <a href="mailto:antonioarcher.dev@gmail.com">antonioarcher.dev@gmail.com</a>
    </p>
    <p>
      <strong>Phone:</strong>{" "}
      <a href="tel:+12672256778">267-225-6778</a>
    </p>
    <div className="qr-code-container footer-qr">
      <QRCodeSVG
        value="https://adarcher.app"
        size={80} // Increased from 64 to 80
        level="H"
        includeMargin={false} // No margin for a cleaner look in the footer
        className="qr-code"
        bgColor="transparent" // Transparent background
        fgColor="currentColor" // Use current text color for the QR code
      />
      <p className="qr-code-text">I thought this was cool, cause I can share this qr code from my apple watch</p>
    </div>
  </footer>
);

export default Layout;