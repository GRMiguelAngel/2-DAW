# Configuración de FTP utilizando el servidor vsFTP

Para empezar creo los usuario con el siguiente comando:

```bash
sudo adduser usuario1
sudo adduser usuario2
sudo adduser usuario3
sudo adduser usuario4
sudo adduser usuario5
sudo adduser usuario6
```

Para hacer que el usuario 2 y 5 no esten enjaulados hay que insertarlo en el fichero __/etc/vsftpd.chroot_list__.

Para los usuarios 1 y 6 no hay que hacer nada porque por defecto no estan enjaulados.

Para que el usuario 3 y 4 no tengan acceso al servidor hay que insertarlo en el fichero __/etc/vsftpd.user_list__.

Para hacer una desconexión automática del usuario 5 minutos después de que haya accedido al servidor, hay que añadir la siguiente directriz en el fichero __/etc/vsftpd.conf__:

```conf
idle_session_timeout=300
```