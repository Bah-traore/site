document.addEventListener("DOMContentLoaded", function () {
    // Liste des URL des images de fond
    const imageUrls = [
        "url('fond_profil/image1.jpeg')",
        "url('fond_profil/image2.jpeg')",
        "url('fond_profil/image3.jpeg')",
        "url('fond_profil/image4.jpeg')",
        "url('fond_profil/image5.jpeg')"
        

        // Ajoutez autant d'URL que nécessaire
    ];

    // Interval de changement d'image en millisecondes (par exemple, toutes les 5 secondes)
    const interval = 2000;

    // Récupérer la div par son ID
    const backgroundContainer = document.getElementById("background");

    // Fonction pour changer l'image de fond
    function changeBackground() {
        const randomIndex = Math.floor(Math.random() * imageUrls.length);
        const randomImageUrl = imageUrls[randomIndex];
        backgroundContainer.style.backgroundImage = randomImageUrl;
    }

    // Appeler la fonction initiale et configurer l'intervalle de changement
    changeBackground();
    setInterval(changeBackground, interval);
});
