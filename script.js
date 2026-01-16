// Fonction pour basculer entre les langues
function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        if (element.getAttribute('data-lang') === lang) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
}

// Fonction pour rediriger vers LinkedIn
function redirectToLinkedIn() {
    window.open("https://www.linkedin.com/in/tonprofil/", "_blank");
}
