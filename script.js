function translateLanguage(language) {
    var originalUrl = window.location.origin + window.location.pathname;

    // Si el idioma seleccionado es inglés (o el idioma original de la página), solo recarga la página
    if (language === "en-US") {
        window.location.href = originalUrl;
    } else {
        // Almacena el idioma seleccionado en el localStorage
        localStorage.setItem('selectedLanguage', language);

        // Recarga la página para volver al estado original
        window.location.href = originalUrl;
    }
}

// Comprueba si hay un idioma seleccionado en el localStorage al cargar la página
window.onload = function() {
    var selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage && selectedLanguage !== 'en-US') {
        // Después de que la página se haya recargado, aplica la traducción
        setTimeout(function() {
            var translateUrl = "https://translate.google.com/translate?hl=" + selectedLanguage + "&sl=auto&tl=" + selectedLanguage + "&u=" + encodeURIComponent(window.location.href);
            window.location.href = translateUrl;
        }, 1000);  // Ajusta el tiempo de espera si es necesario
    }
}

// Muestra y oculta las opciones
document.querySelector('.select-selected').addEventListener('click', function() {
    this.classList.toggle('select-arrow-active');
    document.querySelector('.select-items').classList.toggle('select-hide');
});

// Cerrar el menú cuando se hace clic fuera del selector
document.addEventListener('click', function(event) {
    var selectElement = document.querySelector('.custom-select');
    var selectedElement = document.querySelector('.select-selected');
    var itemsElement = document.querySelector('.select-items');

    if (!selectElement.contains(event.target)) {
        selectedElement.classList.remove('select-arrow-active');
        itemsElement.classList.add('select-hide');
    }
});
