// Función para cargar las citas desde el backend y mostrarlas en el frontend
function cargarCitas() {
    var citasContainer = document.getElementById('citas-container');

    // Realizar una solicitud AJAX al backend para obtener las citas
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'obtener_citas.php', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Limpiar el contenedor de citas
            citasContainer.innerHTML = '';

            // Parsear la respuesta JSON con las citas
            var citas = JSON.parse(xhr.responseText);

            // Mostrar cada cita en el frontend
            citas.forEach(function(cita) {
                var citaElement = document.createElement('p');
                citaElement.innerHTML = 'Fecha: ' + cita.fecha + ', Hora: ' + cita.hora + ', Nombre: ' + cita.nombre;
                citasContainer.appendChild(citaElement);
            });
        }
    };
    xhr.send(null);
}

// Llamar a la función cargarCitas al cargar la página
window.onload = function() {
    cargarCitas();
};