document.getElementById('bookBtn').addEventListener('click', function() {
    alert("Merci de votre intérêt ! Nous allons vous rediriger vers le formulaire de réservation.");
});

// Animation simple au défilement
const cards = document.querySelectorAll('.day-card');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < triggerBottom) {
            card.style.opacity = "1";
            card.style.transform = "translateX(0)";
        }
    });
});

// Initialisation des cartes (pour le JS)
cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateX(-20px)";
    card.style.transition = "all 0.5s ease-out";
});