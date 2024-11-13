document.getElementById("loginForm").addEventListener("submit", function(event) {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("Por favor, complete ambos campos.");
        event.preventDefault();
        return;
    }
});

function register() {
    window.location.href = 'registro.html';
}

