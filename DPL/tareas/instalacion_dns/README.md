# Instalación DNS
### Instalación de servicios DNS

Instalo los siguientes servicios.
```markdown
# Instalación de bind9, bind9-utils y nano
```bash
sudo apt install bind9 bind9-utils nano
```

### Verificación del estado de bind9

Compruebo que este bind9 esté activo
```markdown
# Verificación del estado de bind9
```bash
systemctl status bind9
```

### Configuración del firewall

Permito el acceso al puerto y protocolo de bind9
```markdown
# Configuración del firewall para permitir el acceso a bind9
```bash
sudo ufw allow bind9
```

### Configuración de named.conf.options

Accedemos al fichero __"/etc/bind/named.conf.options"__ y lo configuro para que sepa desde que redes o ip se pueden hacer las consultas.
```markdown
# Edición del fichero named.conf.options
```bash
sudo nano /etc/bind/named.conf.options
```

Modifico el fichero con la siguiente configuración.
```markdown
# Configuración de named.conf.options
```bash
listen-on { any; };
allow-query { localhost; 10.10.20.0/24; };
forwarders {
        8.8.8.8;
        8.8.4.4;
};
dnssec-validation no;
```

### Configuración de named

Obligo el uso único de IPv4.
```markdown
# Edición del fichero named
```bash
sudo nano /etc/default/named
```

Modifico __OPTIONS__ hasta que quede de la siguiente forma:
```markdown
### Configuración de named
```bash
OPTIONS="-u bind -4"
```

Compruebo la configuración de bind9 y reinicio el servicio.

```bash
sudo named-checkconf
systemctl restart bind9
```

Agrego zonas.

```bash
sudo nano /etc/bind/named.conf.local

zone "prueba.com" IN {
        type master;
        file "/etc/bind/zonas/db.prueba.com";
};

zone "20.10.10.in-addr.arpa" {
        type master;
        file "/etc/bind/zonas/db.10.10.20";
};
```

Creo el directorio de zonas y el fichero de zona.

```bash
sudo mkdir /etc/bind/zonas
sudo nano /etc/bind/zonas/db.prueba.com

$TTL    1D
@       IN      SOA     ns1.prueba.com. admin.prueba.com. (
        1               ; Serial
        12h             ; Refresh
        15m             ; Retry
        3w              ; Expire
        2h  )           ; Negative Cache TTL

;       Registros NS

        IN      NS      ns1.prueba.com.
ns1     IN      A       10.10.20.13
www     IN      A       10.10.20.13
```

Creo el siguiente fichero para registrar cualquier error que pueda haver.

```bash
sudo nano /etc/bind/zonas/db.10.10.20

$TTL    1d ;
@       IN      SOA     ns1.prueba.com admin.prueba.com. (
                        20210222        ; Serial
                        12h             ; Refresh
                        15m             ; Retry
                        3w              ; Expire
                        2h      )       ; Negative Cache TTL
;
@      IN      NS      ns1.prueba.com.
1       IN      PTR     www.prueba.com.

```

Compruebo que el servicio está funcionando correctamente.

```bash
sudo named-checkzone networld.cu /etc/bind/zonas/db.prueba.com 
zone networld.cu/IN: loaded serial 1
OK

sudo named-checkzone db.20.10.10.in-addr.arpa /etc/bind/zonas/db.10.10.20
a /etc/bind/zonas/db.10.10.20
zone db.20.10.10.in-addr.arpa/IN: loaded serial 20210222
OK

```

Reinicio el servicio de bind para que se apliquen los cambios.

```bash
sudo systemctl restart bind9
```

Compruebo desde otro ordenador que el servicio está funcionando correctamente.

```bash
ping www.prueba.com
```