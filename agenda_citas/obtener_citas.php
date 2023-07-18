<?php
    // Configuración de la conexión a la base de datos
    $servername = "sldk368.piensasolutions.com";
    $username = "qahz166";
    $password = "Darthrober_11";
    $dbname = "qahz135";
    // Crear una conexión a la base de datos
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verificar la conexión
    if ($conn->connect_error) {
        die("Error en la conexión a la base de datos: " . $conn->connect_error);
    }

    // Consulta SQL para obtener todas las citas
    $sql = "SELECT * FROM citas";
    $result = $conn->query($sql);

    $citas = array();

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $citas[] = array(
                'fecha' => $row['fecha'],
                'hora' => $row['hora'],
                'nombre' => $row['nombre']
            );
        }
    }

    // Cerrar la conexión a la base de datos
    $conn->close();

    // Enviar las citas en formato JSON al frontend
    header('Content-Type: application/json');
    echo json_encode($citas);
?>
