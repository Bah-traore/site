//variables globales
let compteur =0; // compteur qui permet de connaitre l'image
window.onload = () => {
    // on recup le diaporama
    const diapo = document.querySelector(".diapo");

    elements = document.querySelector(".elements")
    console.log(elements);

    //clone la 1th image
    let firstImage = elements.firstElementChild.cloneNode(true);

    // inject
    elements.appendChild(firstImage)

    slides = Array.from(elements.children);
    console.log(slides);

    slidesWigth = diapo.getBoundingClientRect().width;
    let next = document.querySelector("#nav-right")
    let prev = document.querySelector("#nav-gauche")

    next.addEventListener("click", slidesNext);
    prev.addEventListener("click", slidesprev);
    time = setInterval(slidesNext, 2000)
}

function slidesNext(){
    //
    compteur ++;
    let decal = -slidesWigth * compteur;
    elements.style.transform = `translateX(${decal}px)`;

    // fin d la transition "rembobine"
    setTimeout(function(){
        if (compteur >= slides.length -1){
            compteur = 0
            elements.style.transition = "unset";
            elements.style.transform = "translateX(0)";
        }
    },1000)
}
function slidesprev(){
    compteur --;
    elements.style.transition("is linear");
    if(compteur < 0){
        compteur = slides.length - 1;
        let decal = - slidesWigth * compteur;
        elements.style.transition = "unset";
        elements.style.transform = `translateX(${decal}px)`;
        setTimeout(slidesprev, 1);
    };
    elements.style.transition = "unset";
    elements.style.transform = `translateX(${decal}px)`;

}


