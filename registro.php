<?php
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = isset($_POST["nombre"]) ? $_POST["nombre"] : "";
    $correo = isset($_POST["correo"]) ? $_POST["correo"] : "";
    $contrasena = isset($_POST["contrasena"]) ? password_hash($_POST["contrasena"], PASSWORD_BCRYPT) : "";

    if (!empty($nombre) && !empty($correo) && !empty($contrasena)) {
        $sql = "INSERT INTO registro (nombre, correo, contrasena) VALUES ('$nombre', '$correo', '$contrasena')";
        
        if ($conn->query($sql) === TRUE) {
            echo "Registro exitoso";
        } else {
            echo "Error en la consulta SQL: " . $conn->error;
        }
    } else {
        echo "Error: Todos los campos son obligatorios.";
    }
    
    
    $conn->close();
}
?>
