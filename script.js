// Efecto: cuando el usuario hace clic en el botón, cambiamos el texto
// por un mensaje de confirmación por unos segundos.
document.addEventListener('DOMContentLoaded', function() {
    const boton = document.querySelector('.btn-download');
    
    if (boton) {
        boton.addEventListener('click', function(e) {
            const textoOriginal = boton.querySelector('span').textContent;
            const span = boton.querySelector('span');
            
            // Cambiar el texto
            span.textContent = '¡Descargando...!';
            boton.style.pointerEvents = 'none';
            boton.style.opacity = '0.7';
            
            // Restaurar después de 3 segundos
            setTimeout(function() {
                span.textContent = textoOriginal;
                boton.style.pointerEvents = 'auto';
                boton.style.opacity = '1';
            }, 3000);
        });
    }
});