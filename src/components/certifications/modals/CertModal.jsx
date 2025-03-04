import { useEffect } from 'react';
import './CertModal.css';

const CertModal = () => {
  useEffect(() => {
    const certCards = document.querySelectorAll(".cert-card");
    const modalTitle = document.getElementById("certModalLabel");
    const modalImg = document.getElementById("certModalImg");
    const modalIssuer = document.getElementById("certModalIssuer");
    const modalDate = document.getElementById("certModalDate");
    const modalLink = document.getElementById("certModalLink");
    const modalExtraInfo = document.getElementById("certModalExtraInfo");

    certCards.forEach((card) => {
      card.addEventListener("click", function () {
        // Get data attributes from the clicked card
        const title = this.getAttribute("data-title");
        const imgSrc = this.getAttribute("data-img");
        const issuer = this.getAttribute("data-issuer");
        const date = this.getAttribute("data-date");
        const link = this.getAttribute("data-link");
        const extraInfo = this.getAttribute("data-extra-info");

        // Update modal content
        modalTitle.textContent = title;
        modalImg.src = imgSrc;
        modalIssuer.textContent = issuer;
        modalDate.textContent = date;
        modalLink.href = link;
        
        // Handle extra info if present
        if (modalExtraInfo) {
          if (extraInfo) {
            modalExtraInfo.textContent = extraInfo;
            modalExtraInfo.style.display = "block";
          } else {
            modalExtraInfo.style.display = "none";
          }
        }
      });
    });
  }, []);

  return (
    <div className="modal fade" id="certModal" tabIndex="-1" aria-labelledby="certModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-dark text-white">
          <div className="modal-header">
            <h5 className="modal-title" id="certModalLabel"></h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-center">
            <img id="certModalImg" src="" alt="Certification" className="img-fluid rounded mb-3" />
            <p id="certModalIssuer" className="mb-1"></p>
            <p id="certModalDate" className="mb-3 text-muted"></p>
            <p id="certModalExtraInfo" className="mb-3 text-warning"></p>
            <a id="certModalLink" href="#" target="_blank" rel="noopener noreferrer" className="btn btn-danger">
              <i className="fas fa-external-link-alt"></i> View Certificate Online
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertModal; 