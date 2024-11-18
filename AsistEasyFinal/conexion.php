<?php
$host = 'localhost';
$username = 'root';
$password = '';
$database = 'sistema_asistencias';

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// No cierres la conexión aquí para que otros scripts puedan usarla
?>

