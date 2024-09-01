function translateLanguage(language) {
    // Primero, recargar la página en el idioma original (sin traducción)
    var originalUrl = window.location.origin + window.location.pathname;

    // Si el idioma seleccionado es inglés (o el idioma original de la página), solo recarga la página
    if (language === "en-US") {
        window.location.href = originalUrl;
    } else {
        // Recarga la página al estado original y luego aplica la traducción
        window.location.href = originalUrl //+ '#googtrans(en|en)';
        
        // Espera un momento para asegurarse de que la página se recarga y luego aplica la traducción
        setTimeout(function() {
            var translateUrl = "https://translate.google.com/translate?hl=" + language + "&sl=auto&tl=" + language + "&u=" + encodeURIComponent(originalUrl);
            window.location.href = translateUrl;
        }, 5000);  // Ajusta el tiempo de espera si es necesario
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
