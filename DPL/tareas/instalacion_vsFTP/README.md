# Práctica de instalación de vsFTP

Instalo __vsftp__.
```bash
sudo apt-get install vsftpd
```
Configuro __vsftpd.conf__ para crear un usuario anónimo.

```conf
anonymous_enable=YES
anon_root=/srv/ftp/anonimo

local_enable=YES

write_enable=YES

local_umask=022

chroot_local_user=YES

chroot_list_enable=YES
chroot_list_file=/etc/vsftpd.chroot_list
allow_writeable_chroot=YES

userlist_enable=YES
userlist_file=/etc/vsftpd.user_list
userlist_deny=YES

ftpd_banner="Hola mi rey/reina"

xferlog_enable=YES
xferlog_file=/var/log/vsftpd.log
```

Ejecuto el siguiente comando para añadir un certificado SSL a __vsftpd__.

```bash
sudo openssl req -x509 -nodes -days 365 -newkey isa:1024 -keyout /etc/ssl/private/vsftpd.key -out /etc/ssl/certs/vsftpd.pem
```

Unas vez con el certificado creado vuelvo al fichero de configuración de __vsftpd__ y lo modifico para que utilice el certificado SSL.

```conf
rsa_cert_file=/etc/ssl/certs/vsftpd.pem

rsa_private_key_file=/etc/ssl/private/vsftpd.pem

ssl_enable=YES
```

Por último, reinicio el servicio de __vsftpd__ para que se apliquen los cambios.

```bash
systemctl restart vsftpd
```