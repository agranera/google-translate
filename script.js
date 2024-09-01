var originalUrl;

window.onload = function() {
    // Solo inicializa originalUrl si no está definida previamente
    if (!originalUrl) {
        originalUrl = window.location.origin + window.location.pathname;
    }
};

function translateLanguage(language) {

    // Si el idioma seleccionado es inglés (o el idioma original de la página), recarga la página original
    if (language === "en-US") {
        window.location.href = originalUrl;
    } else {
        // Usa siempre la URL original para la traducción
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
