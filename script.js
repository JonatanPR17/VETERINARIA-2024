

/* showP=document.getElementById("close").addEventListener('click', function(){
    const barra=document.querySelector("#show")
    barra.classList="block hidden"
})

white=document.getElementById("space-white").addEventListener('click', function(){
    const barra=document.querySelector("#show")
    barra.classList="block hidden"
})

readMore=document.getElementById("button-readMore").addEventListener('click', function(){
    const readMore2=document.querySelector("#button-readMore")
    const readMore3=document.querySelector("#moreInfo")
    readMore2.classList="hidden"
    readMore3.classList.remove('hidden')
})

const servicios=document.getElementById("moreService")

servicios.addEventListener('click', function(){
    this.classList.add("hidden") */
    /* const showMore=document.querySelectorAll("#masServicios")
    showMore.classList.remove("hidden") */
    /* const masServicios = document.querySelectorAll("#masServicios");
    masServicios.forEach(function(elemento) {
        elemento.classList.remove("hidden");
    }); */
/* }) */

//Mejorando el codigo
document.addEventListener('DOMContentLoaded', function() {
    

    // Funcionalidad de la barra lateral
    document.getElementById('barra').addEventListener('click', function(e) {
        e.preventDefault();
        const menu = document.getElementById('show');
        menu.classList.toggle('hidden'); // Alternar la visibilidad
    });

    // Verifica si existen estos elementos antes de agregarles eventos
    const spaceWhiteSideBar = document.getElementById("space-white");
    if (spaceWhiteSideBar) {
        spaceWhiteSideBar.addEventListener('click', function(){
            const sideBar = document.querySelector("#show");
            sideBar.classList.add("block");
            sideBar.classList.add("hidden");
        });
    }

    const moreInfoCompany = document.getElementById("contentButtomReadMore");
    if (moreInfoCompany) {
        moreInfoCompany.addEventListener('click', function(){
            this.classList.add("hidden");
            const moreInfo = document.querySelector("#moreInfo");
            if (moreInfo) {
                moreInfo.classList.remove("hidden");
            }
        });
    }

    const moreService = document.getElementById("moreService");
    if (moreService) {
        moreService.addEventListener('click', function(){
            this.classList.add("hidden");
            const addService = document.querySelectorAll("#masServicios");
            addService.forEach(element => {
                element.classList.remove("hidden");
            });
        });
    }
});
// Función para el slider
const slider = document.getElementById('slider');
const totalSlides = slider.children.length;
let currentIndex = 0;

function slide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(slide, 3000); // Auto-slide cada 3 segundos