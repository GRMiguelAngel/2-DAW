# Redireccionamiento de páginas en php

Para crear una redirección en PHP, sigue estos pasos:

1. Incluye la función header(): Comienza por incluir la función header(). Esta función se utiliza para enviar encabezados HTTP, incluyendo la redirección.

2. Define la ubicación de destino: Después de la función header(), especifica la URL o el archivo al que deseas redirigir. Esto se hace mediante el campo de respuesta de ubicación (o Location).

    Ejemplo de código:
    ```php
    <?php

    header("Location: https://www.ejemplo.com/pagina.php");
    exit; // Es importante asegurase de incluir "exit" para evitar alguna ejecución adicional.
    ?>
    ```