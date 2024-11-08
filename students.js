// Escucha el evento de envío del formulario de estudiantes
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtiene los valores de los campos de entrada
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const curso = document.getElementById('curso').value;
    const documento = document.getElementById('documento').value;

    // Obtiene la tabla y añade una nueva fila
    const table = document.getElementById('studentsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Inserta las celdas en la nueva fila y asigna los valores de los campos
    newRow.insertCell(0).textContent = nombre;
    newRow.insertCell(1).textContent = apellido;
    newRow.insertCell(2).textContent = curso;
    newRow.insertCell(3).textContent = documento;

    // Limpia el formulario después de añadir un estudiante
    document.getElementById('studentForm').reset();
});

// Escucha el evento de clic para el botón de "Cerrar Sesión"
document.getElementById('logoutButton').addEventListener('click', function() {
    // Redirige al usuario a la página de inicio de sesión
    window.location.href = 'index.html';
});
