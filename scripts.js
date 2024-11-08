document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "1234") { // Simulación de autenticación
        window.location.href = 'estudiantes.html';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});