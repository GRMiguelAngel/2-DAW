# Insertar, leer, modificar y borrar registros de la base de datos

## Insert

Para insertar código en nuestra base de datos con un fichero php se utiliza el siguiente código, haciendo la conexión a la base de datos con "$connection", luego escribiendo el comando SQL en "$insert" y haciendo el insert con "$return", después con "print_r" comprobamos que el insert se hizo correctamente.

![](./connection.png)


Gracias al "print_r" podemos ver que el insert se hizo correctamente ya que nos puso un 1 en la página.

![](./comfirm.png)


Aquí vemos que el insert surtió efecto en la base de datos

![](./muestra.png)

## Lectura

Con este código hacemos la lectura, en "$sql" en vez de hacer una sentencia Insert, hacemos un Select, luego con "$rows" escogemos la respuesta de la lectura y el "print_r" para que nos lo ponga en la página.

![](/leer_code.png)


Vista de que la lectura se hizo correctamente.

![](./leer_respuesta.png)


Este es como el código anterior pero hacemos un bucle para que nos enseñe todas las filas de la tabla en la base de datos.

![](./leer_bucle.png)


Aquí podemos ver que se a hecho el bucle correctamente.

![](./leer_bucle_respuesta.png)


## Update

Este es el código PHP que se utiliza para hacer un update, es muy parecido al código del Insert.

![](./update_code.png)


Aquí podemos ver que nos da 1, es decir que el update se hizo correctamente.

![](./update_respuesta.png)


Y aquí vemos que el update surtió efecto en la base de datos.

![](./update_comprobacion.png)


## Delete

Este es el código que se usa para hacer un Delete en una tabla de la base de datos, reitero, muy parecido al Insert/Update.

![](./delete_code.png)


La comprobación de que el Delete surtió efecto.

![](./delete_respuesta.png)


Y aquí la base de datos, que vemos que el registro con ID=1 fue eliminado.

![](./delete_comprobacion.png)