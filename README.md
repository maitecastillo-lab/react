# Laboratorio 3

Este es el repositorio de la parte de React. El objetivo ha sido crear una aplicación que sea segura y que no dé errores raros gracias a TypeScript, usando componentes que sirven para cualquier tipo de dato.


### La tabla genérica (DataTable)
Esta tabla: no está cerrada a un solo tipo de dato, sino que usa **Genéricos (`<T>`)**. Esto significa que:
* La tabla se adapta a lo que le pases.
* He usado `keyof T` para que TypeScript me avise si intento poner una columna que no existe en mis datos.
* Para el tema de editar filas, he usado `Partial<T>`. Esto viene genial porque cuando estás editando algo, a veces dejas campos vacíos un momento, y así el código no explota.

### Manejo de fechas con Luxon
Para las fechas nativas de JavaScript, he instalado la librería **Luxon**.
* He instalado también los tipos (`@types/luxon`) para que TypeScript sepa qué estoy haciendo.
* En la carpeta `src/utils`, he hecho una función que calcula los días de diferencia entre dos fechas. Es muy estricta: entra una fecha, sale un número, y no permite errores de formato.

## Carpetas principales

* **src/components**: Aquí está mi tabla genérica.
* **src/utils**: Aquí he guardado la lógica de las fechas.
* **docs**: Aquí he dejado un archivo llamado `arquitectura-final.md` donde explico un poco más a fondo por qué he usado TypeScript para evitar errores en el futuro.


## Cómo hacerlo funcionar

Si quieres probarlo en tu PC:

1. Instala todo:
   ```bash
   npm install