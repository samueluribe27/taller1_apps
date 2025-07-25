
// esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // obtener referencias a los elementos del DOM
    const textInput = document.getElementById('textInput');
    const charCount = document.getElementById('charCount');

    // agregar manejador de eventos para el evento 'input' del textarea
    textInput.addEventListener('input', function() {
        // actualizar el contador con la longitud actual del texto
        charCount.textContent = this.value.length;
    });
});
