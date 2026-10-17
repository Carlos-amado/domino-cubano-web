// ════════════════════════════════════════════════════════════
//  EFECTO DEL BOTÓN DE DESCARGA
//  Al hacer clic, cambia el texto por "¡Descargando...!" y
//  cambia el color del botón a verde (éxito), luego lo restaura.
// ════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
    const boton = document.querySelector('.btn-download');

    if (boton) {
        const span = boton.querySelector('span');
        const textoOriginal = span.textContent;

        // Colores para el feedback
        const colorOriginal = '';      // deja el color del CSS
        const colorExito    = '#2E7D32'; // verde oscuro (éxito)

        boton.addEventListener('click', function(e) {
            // Cambiar el texto
            span.textContent = '¡Descargando...!';

            // Cambiar el color de fondo a verde (feedback de éxito)
            boton.style.backgroundColor = colorExito;

            // Deshabilitar el botón temporalmente
            boton.style.pointerEvents = 'none';
            boton.style.opacity = '0.85';

            // Restaurar después de 3 segundos
            setTimeout(function() {
                span.textContent = textoOriginal;
                boton.style.backgroundColor = colorOriginal;
                boton.style.pointerEvents = 'auto';
                boton.style.opacity = '1';
            }, 3000);
        });
    }
});