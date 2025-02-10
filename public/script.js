document.addEventListener("DOMContentLoaded", function () {
    // 1. Smooth Scrolling for In-Page Anchors
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // 2. Hover Animation for Link Buttons
    const links = document.querySelectorAll(".link-btn");
    links.forEach((link) => {
        link.addEventListener("mouseover", () => {
            link.style.transform = "translateY(-2px)";
        });
        link.addEventListener("mouseout", () => {
            link.style.transform = "translateY(0)";
        });
    });

    // 3. Click Tracking for Analytics
    links.forEach((link) => {
        link.addEventListener("click", function () {
            console.log("Link clicked:", this.href);
        });
    });

    // 4. Modal Functionality for Certifications
    const certCards = document.querySelectorAll(".cert-card");
    const modalTitle = document.getElementById("certModalLabel");
    const modalImg = document.getElementById("certModalImg");
    const modalIssuer = document.getElementById("certModalIssuer");
    const modalDate = document.getElementById("certModalDate");
    const modalLink = document.getElementById("certModalLink");

    certCards.forEach((card) => {
        card.addEventListener("click", function () {
            // Get data attributes from the clicked card
            const title = this.getAttribute("data-title");
            const imgSrc = this.getAttribute("data-img");
            const issuer = this.getAttribute("data-issuer");
            const date = this.getAttribute("data-date");
            const link = this.getAttribute("data-link");

            // Update modal content
            modalTitle.textContent = title;
            modalImg.src = imgSrc;
            modalIssuer.textContent = issuer;
            modalDate.textContent = date;
            modalLink.href = link;
        });
    });
});
    // JavaScript function to copy phone number to clipboard
    // document.getElementById('phone').addEventListener('click', function() {
    //     const phoneNumber = '267-225-6778';
        
    //     // Create a temporary input element to copy the phone number
    //     const tempInput = document.createElement('input');
    //     tempInput.value = phoneNumber;
    //     document.body.appendChild(tempInput);
    //     tempInput.select();
    //     document.execCommand('copy');
    //     document.body.removeChild(tempInput);

    //     // Show the toast message
    //     const toast = document.getElementById('toast');
    //     toast.style.display = 'block';

    //     // Hide the toast after 2 seconds
    //     setTimeout(function() {
    //         toast.style.display = 'none';
    //     }, 2000);
    // });
