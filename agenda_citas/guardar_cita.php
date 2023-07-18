<?php
    // Obtener los datos de la cita desde el formulario
    $fecha = $_POST['fecha'];
    $hora = $_POST['hora'];
    $nombre = $_POST['nombre'];

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

    // Escapar caracteres especiales para evitar inyección de SQL
    $fecha = $conn->real_escape_string($fecha);
    $hora = $conn->real_escape_string($hora);
    $nombre = $conn->real_escape_string($nombre);

    // Consulta SQL para verificar si ya existe una cita en la misma fecha y hora
    $sql = "SELECT COUNT(*) AS count FROM citas WHERE fecha = '$fecha' AND hora = '$hora'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $count = $row['count'];

        if ($count > 0) 
        {
            echo "
            <!DOCTYPE html>
            <html lang='es'>
            <head>
                <meta charset='UTF-8'>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                <meta http-equiv='X-UA-Compatible' content='ie=edge'>
                <link href='https://fonts.googleapis.com/css?family=Open+Sans&display=swap' rel='stylesheet'> 
                <link rel='shortcut icon' href='../images/cerebro1.png'>
                <link rel='preconnect' href='https://fonts.gstatic.com'>
                <link rel='stylesheet' href='./css/styles.css'>
                <link rel='stylesheet' href='./css/cookies.css'>
            </head>
            <body>
            <div class='contenedor' id='general'>
            <h1>Ya existe una cita programada en la misma fecha y hora.</h1>

            <script>
                setTimeout(function() {
                    window.history.back();
                }, 3000); // 3000 milisegundos = 3 segundos
            </script>
            </div>
            <div class='fondo-aviso-cookies' id='fondo-aviso-cookies'></div>
            <script src='https://cdn.jsdelivr.net/npm/typed.js@2.0.12'></script>
            <script src='./js/header.js'></script>
            <script src='./js/botones.js'></script>
            <script src='js/aviso-cookies.js'></script>
            <script src='./js/main.js'></script>
            </body>
            </html>";
        } else {
            // Consulta SQL para insertar la cita en la base de datos
            $sql = "INSERT INTO citas (fecha, hora, nombre) VALUES ('$fecha', '$hora', '$nombre')"; 
            if ($conn->query($sql) === TRUE) {
                echo "
                <!DOCTYPE html>
                    <html lang='es'>
                    <head>
                        <meta charset='UTF-8'>
                        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                        <meta http-equiv='X-UA-Compatible' content='ie=edge'>
                        <link rel='shortcut icon' href='../images/cerebro1.png'>
                        <link rel='stylesheet' href='./css/styles.css'>
                    </head>
                    <body>
                        <div class='contenedor' id='general'>
                        <h1>Cita agregada exitosamente</h1>

                        <script>
                            setTimeout(function() {
                                window.history.back();
                            }, 3000); // 3000 milisegundos = 3 segundos
                        </script>
                        </div>
                    </body>
                    </html>";
            } else {
                echo
                    "<!DOCTYPE html>
                    <html lang='es'>
                    <head>
                        <meta charset='UTF-8'>
                        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                        <meta http-equiv='X-UA-Compatible' content='ie=edge'>
                        <link rel='shortcut icon' href='../images/cerebro1.png'>
                        <link rel='stylesheet' href='./css/styles.css'>
                    </head>
                    <body>
                        <div class='contenedor' id='general'>
                        <h1>Error al agregar la cita:" .$conn->error ."</h1>

                        <script>
                            setTimeout(function() {
                                window.history.back();
                            }, 3000); // 3000 milisegundos = 3 segundos
                        </script>
                        </div>
                    </body>
                    </html>";
            }
        }
    }
    // Cerrar la conexión a la base de datos
    $conn->close();
?>
