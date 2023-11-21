document.addEventListener('DOMContentLoaded', function () {
    const btnInicio = document.getElementById('gotoTop');

    // Función para animar el scroll suave
    function scrollToTop() {
        const scrollDuration = 500; // Duración de la animación en milisegundos
        const scrollStep = -window.scrollY / (scrollDuration / 15);

        const scrollInterval = setInterval(function () {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    }

    // Agrega un evento de clic al botón
    btnInicio.addEventListener('click', function () {
        scrollToTop();
    });
});

// Initialize and add the map
let map;

async function initMap() {
    // The location of Uluru
    const position = { lat: -25.344, lng: 131.031 };
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
// The map, centered at Uluru
    map = new Map(document.getElementById("map"), {
        zoom: 4,
        center: position,
        mapId: "DEMO_MAP_ID",
    });
}

initMap();