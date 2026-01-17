// Fonction pour basculer entre les langues (version corrigée)
function switchLanguage(lang) {
    const allElements = document.querySelectorAll('[data-lang]');
    allElements.forEach(element => {
        element.style.display = 'none';
    });

    const selectedElements = document.querySelectorAll(`[data-lang="${lang}"]`);
    selectedElements.forEach(element => {
        element.style.display = 'block';
    });
}

// Fonction pour rediriger vers LinkedIn
function redirectToLinkedIn() {
    window.open("https://www.linkedin.com/in/guillaume-aubry-65751842/", "_blank");
}

// Fonction pour afficher un message de confirmation après envoi du formulaire
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche l'envoi par défaut

    const form = event.target;
    const formData = new FormData(form);

    // Envoi des données à Formspree
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                // Affiche un message de succès
                const messageElement = document.getElementById('form-message');
                const currentLang = document.querySelector('[data-lang]:not([style*="display: none"])').getAttribute('data-lang');

                if (currentLang === 'fr') {
                    messageElement.textContent = "Merci ! Votre message a été envoyé.";
                } else {
                    messageElement.textContent = "谢谢！您的留言已发送。";
                }
                messageElement.style.display = 'block';
                form.reset(); // Réinitialise le formulaire
            }
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
});
