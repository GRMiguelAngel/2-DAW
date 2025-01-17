# Instalación LAMP

Se intala Apache2.

![](media/install_apache2.png)

Se instala MariaDB.

![](media/install_MariaDB.png)

Se comprueba la instalación.

![](media/comprobar_MariaDB.png)

Se configura para que arranque cuando la máquina se inicie.

![](media/MariaDB_enable.png)

Se comprueba la versión.

![](media/Mariadb_version.png)

Se ejecuta un script de seguridad.

![](media/security_script.png)

Accedo a la base de datos.

![](media/entrar_db.png)

Creo el usuario 'developer'.

![](media/crear_usuario.png)

Compruebo que se haya creado correctamente.

![](media/compruebo_user.png)

Instalo php.

![](media/instalacion_php.png)

Se activa el modulo apache php8 y reinicia.
![](media/activacion_modulo.png)
![](media/reinicio_apache2.png)

Abro el archivo __/var/www/html/info.php__.

![](media/nano_fich.png)
![](media/codigo_php.png)

Compruebo info.php en el navegador.

![](media/infophp.png)

Instalo __PHP-FPM__.

![](media/install_phpfpm.png)

Habilito __proxy_fcgi__ y __setenvif__.

![](media/avilitar_proxy_setenvif.png)

Reinicio apache2.

![](media/reinicio_apache2_2.png)

