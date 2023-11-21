document.addEventListener('DOMContentLoaded', function () {
    var btnInicio = document.getElementById('gotoTop');

    // Función para animar el scroll suave
    function scrollToTop() {
        var scrollDuration = 500; // Duración de la animación en milisegundos
        var scrollStep = -window.scrollY / (scrollDuration / 15);

        var scrollInterval = setInterval(function(){
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
