// faq accodion

document.addEventListener('DOMContentLoaded', () => {

    // Mobile menu

    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    hamburgerButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    })

    // Close sidemenu when clicking "Contact Me"
    document.getElementById("contact-me").addEventListener("click", function () {
        mobileMenu.classList.toggle('active');
      });
}); 