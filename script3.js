document.addEventListener("DOMContentLoaded", function () { 
    const orders = {
        "1": {
            client: "John Doe",
            produits: [
                { image: "data:image/jpeg;base64,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", nom: "Tableau moderne", quantite: 1, taille: "L", couleur: "Noir", prix: "1500 DA" }
            
            ]
        },
        "2": {
            client: "Jane Smith",
            produits: [
                { image: "https://cdn.laredoute.com/cdn-cgi/image/width=500,height=500,fit=pad,dpr=1/products/4/9/b/49bd05a6ccf97786aaddad370ff70842.jpg", nom: "Chaise design", quantite: 4, taille: "XL", couleur: "Rouge", prix: "3000 DA" }
            ]
        }
    };

    const orderCards = document.querySelectorAll(".order-card");
    const popup = document.getElementById("orderPopup");
    const closeBtn = document.querySelector(".close-btn");
    const orderDetails = document.getElementById("orderDetails");
    const clientInfo = document.getElementById("clientInfo");
    const totalPriceElement = document.getElementById("totalPrice"); // Élément pour afficher le total

    orderCards.forEach(card => {
        card.addEventListener("click", function () {
            const orderId = this.dataset.id;
            if (orders[orderId]) {
                const order = orders[orderId];

                // Afficher les informations du client
                clientInfo.textContent = `Client : ${order.client}`;

                // Générer les lignes du tableau et calculer le total
                orderDetails.innerHTML = "";
                let total = 0;
                order.produits.forEach(produit => {
                    let prixNumerique = parseFloat(produit.prix.replace(" DA", ""));
                    total += prixNumerique;

                    const row = `
                        <tr>
                            <td><img src="${produit.image}" alt="Produit"></td>
                            <td>${produit.nom}</td>
                            <td>${produit.quantite}</td>
                            <td>${produit.taille}</td>
                            <td>${produit.couleur}</td>
                            <td>${produit.prix}</td>
                        </tr>
                    `;
                    orderDetails.innerHTML += row;
                });

                // Afficher le total de la commande
                totalPriceElement.textContent = `Total : ${total.toFixed(2)} DA`;

                // Afficher le popup
                popup.style.display = "flex";
            }
        });
    });

    // Fermer le popup
    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Fermer le popup si on clique en dehors
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner tous les boutons "Validé"
    const buttons = document.querySelectorAll('.edit-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const orderCard = this.closest('.order-card');
            
            // Ajouter la classe 'validated' pour changer la couleur de fond
            orderCard.classList.add('validated');
            
            // Masquer le bouton 'Validé'
            this.style.display = 'none';
        });
    });
});

