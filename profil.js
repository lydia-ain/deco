// Affichage du popup lors du clic sur "Modifier mot de passe"
document.getElementById('changePasswordBtn').addEventListener('click', function() {
    document.getElementById('passwordPopup').style.display = 'flex'; // Afficher le popup
});

// Fermeture du popup lorsque l'on clique sur la croix
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('passwordPopup').style.display = 'none'; // Fermer le popup
});

// Vérification du mot de passe actuel lors de la soumission du formulaire
document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const currentPassword = document.getElementById('currentPassword').value;
    if (currentPassword === "********") {
        alert("Mot de passe correct !");
        document.getElementById('passwordPopup').style.display = 'none'; // Fermer le popup
    } else {
        alert("Mot de passe incorrect.");
    }
});
