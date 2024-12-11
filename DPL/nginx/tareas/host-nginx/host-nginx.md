# Creación de host con nginx

* Para empesar nos posicionaremos en la carpeta __/var/www/__ para crear la estructura de los hosts virtuales, en este caso de empresa1.
```
cd /var/www
sudo mkdir empresa1.com
sudo nano empresa1.com/index.html
```

* dentro del __index.html__ se añade un texto a modo de prueba que nos indicará cuando terminemos de crear los host virtuales que todo ha ido correctamente. Ejemplo:
```
Prueba empresa 1
```

* A continuación se le darán los permisos tanto a el usuario como a la carpeta.
```
sudo chown -R www-data:www-data /var/www/empresaX.com
sudo chmod -R 755 /var/www/empresaX.com
```

* Ahora continuaremos con la configuración en __sites-availables__ situado en __/etc/nginx__.
```
cd /etc/nginx/sites-availables
```

Una vez en esta carpeta se encontrará un fichero con nombre __default__ con la configuración por defecto de nginx y nosotros lo tomaremos como base para el host virtual de empresa1.

Los cambios que haremos sobre el fichero son los siguientes:

__root /var/www/empresaX.com__: para configurar la raiz de los ficheros .

__listen 80__: por defecto incluye default_server, hay que eliminarlo.

__listen [::]:80__: igualmente que el anterior, eliminamos default_server que trae por defecto.

__server_name empresa1.com www.empresa1.com__: para asignar como nombre empresa1.com y www.empresa1.com como alias.


* Tras todos estos cambios crearemos los enlaces a los ficheros de configuración:
```
sudo ln -s /etc/nginx/sites-available/empresaX.conf /etc/nginx/sites-enabled/
```

* Por ultimo para evitar duplicados se elimina el fichero default.
```
sudo rm default
```

* Se comprueba Que todo haya funcionado correctamente.
```
sudo nginx -t
```

* Por último se debe configurar el DNS, asignandole la IP local:
```
127.0.0.1       empresa1.com
127.0.0.1       www.empresa1.com

127.0.0.1       empresa2.com
127.0.0.1       www.empresa2.com

127.0.0.1       empresa3.com
127.0.0.1       www.empresa3.com
```
