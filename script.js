function translateLanguage(language) {
    if (language === "en-US") {
        // Recargar la página en el idioma original (sin traducción)
        window.location.href = window.location.origin + window.location.pathname;
    } else {
        // Traducir la página al idioma seleccionado
        var translateUrl = "https://translate.google.com/translate?hl=" + language + "&sl=auto&tl=" + language + "&u=" + encodeURIComponent(window.location.href);
        window.location.href = translateUrl;
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
