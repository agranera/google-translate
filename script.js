// Almacena la URL original de la página
var originalUrl = window.location.origin + window.location.pathname;

function translateLanguage(language) {
    if (language === "en-US") {
        // Si el idioma seleccionado es inglés, recargar la página original
        window.location.href = originalUrl;
    } else {
        // Construir la URL de Google Translate usando siempre la URL original
        var translateUrl = "https://translate.google.com/translate?hl=" + language + "&sl=auto&tl=" + language + "&u=" + encodeURIComponent(originalUrl);
        window.location.href = translateUrl;
    }
}

// Muestra y oculta las opciones del selector
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
