Ejercicio de la validación de la tarjeta de credito

Hay que validar un número de tarjeta de credito.

## Pseudocódigo
1.-Obtengo un número de tarjeta de credito a traves de un usuario.
2.-Valido que sean 16 digitos para seguir con la validación.
3.-Convierto el string obtenido en números y mando a llamar su posición de cada uno de los números.
4.-Valido cada número verificador según su posición de acuerdo al algoritmo de Luhn
y el resultado de la operación lo transformo en un array y sumo los dos números
y así le doy un nuevo valor a la variable.
5.-Sumo todos los nuevos números verificados y los no verificados para obtener un valor total
 y validarlo con el modulo % 10, y ver si es un número de tarjeta valido o invalido
 6.-Una vez que validé el número con el modulo de 10 lanzo un mensaje con la validación final.


![diagrama de flujo ](sprint1_tarjeta/diagrama-de-flujo-validacion.tarjeta.jpeg)
