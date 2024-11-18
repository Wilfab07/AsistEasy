function guardarAsistencias() {
    // Lógica para guardar las asistencias
    alert('Asistencias guardadas con éxito.');
}

function limpiarFormulario() {
    // Lógica para limpiar los campos del formulario
    document.getElementById('fecha').value = '';
    document.getElementById('grupo').selectedIndex = 0;
    document.getElementById('materia').selectedIndex = 0;
    alert('Formulario limpiado.');
}

function regresarMenu() {
    // Lógica para regresar al menú principal
    window.location.href = 'menu_principal.html'; // Cambia 'menu.html' por la ruta correcta
}
