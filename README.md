# Examen2---LFFR

1.-Realizar un servicio para registrar ciudades o lugares de interés dentro de países para después almacenarlos dentro de una base de datos (relacional o no relacional). El servicio debe validar que no haya lugares o ciudades repetidas, sin embargo, cada vez que detecte un registro repetido deberá incrementar un contador de interés. Los datos que se necesitan registrar en la base son la ciudad o lugar de interés, el país, el atractivo del lugar (descripción pequeña) y el contador de interés.

2.-Realizar el servicio para consultar las ciudades o lugares de interés por país.

El desarrollo deberá considerar el patrón MVC y podrán utilizar bases de datos locales o en la instancia en la nube.

## Create

Para probar la creación de un nuevo registro en la base de datos ingresar en PostMan la siguiente URL y enviar una petición mediante POST:

```
localhost:8080/ciudades/agregarCiudad
```
Enviar mediante el body los datos a agregar de la siguiente manera:

```
{
    "nombre": "Bosque de Chapultepec",
    "pais": "México",
    "descripcion": "Bosque en la CDMX",
    "interes": 0
}
```

## Read

Para probar la lectura de los datos en la tabla de nuestra base de datos ingresar en PostMan la siguiente URL y enviar una petición mediante GET:

```
localhost:8080/ciudades/todasCiudades
```

## Update

Para probar la actualización de un registro existente en la base de datos ingresar en PostMan la siguiente URL y enviar una petición mediante POST:

```
localhost:8080/ciudades/actualizarCiudad
```
Enviar mediante el body los datos a actualizar y el id del registro a actualizar de la siguiente manera:

```
{
    "id": 1,
    "nombre": "Estela de Luz",
    "pais": "México",
    "descripcion": "Lugar mágico en la CDMX"
}
```
_El id es el dato que se toma para buscar el registro y actualizarlo_

## Delete

Para probar la eliminación de un registro existente en la base de datos ingresar en PostMan la siguiente URL y enviar una petición mediante POST:

```
localhost:8080/ciudades/borrarCiudad
```
Enviar mediante el body el id del registro a actualizar de la siguiente manera:

```
{
    "id": 5
}
```
_El id es el dato que se toma para buscar el registro y eliminarlo_

##  Servicio para consultar las ciudades o lugares de interés por país (o nombre o descripción).

Para probar la busqueda de un registro existente en la base de datos ingresar en PostMan la siguiente URL y enviar una petición mediante POST:

```
localhost:8080/ciudades/buscarCiudad
```
Enviar mediante el body el parametro de busqueda de la siguiente manera:

```
{
    "pais": "México"
}
```
_Se pueden buscar registros ingresando el id, el nombre, el país, la descripción o el contador de interes_

```
{
    "nombre": "Bosque de Chapultepec"
}
```
_El parametro a buscar debe de ser identico al que está en la base de datos._