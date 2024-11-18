<?php
session_start();
include 'conexion.php';

// Obtener datos del formulario
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

if (!empty($username) && !empty($email) && !empty($password)) {
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        $sql = "INSERT INTO usuarios (username, email, password) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($sql);

        if (!$stmt) {
            die("Error en la preparación de la consulta: " . $conn->error);
        }

        $stmt->bind_param("sss", $username, $email, $hashed_password);

        if ($stmt->execute()) {
            echo "Registro exitoso. Ahora puedes <a href='login.html'>iniciar sesión</a>.";
            header("Location: login.html");
            exit;
        } else {
            echo "Error al ejecutar la inserción: " . $stmt->error;
        }

        $stmt->close();
    } else {
        echo "Por favor, ingresa un correo electrónico válido.";
    }
} else {
    echo "Por favor, completa todos los campos.";
}

// Ahora sí, cerramos la conexión al final de register.php
$conn->close();
?>

