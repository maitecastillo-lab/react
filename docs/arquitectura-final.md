
Este documento detalla las decisiones técnicas tomadas para garantizar que la aplicación sea robusta, escalable y libre de errores en tiempo de ejecución (runtime).

## Programación Genérica con `<T>`
En el componente `DataTable`, se ha implementado la interfaz `DataTableProps<T>`. 
# al no prefijar un tipo de dato (como `Estudiante` o `Asignatura`), el componente es agnóstico al modelo. 
# Gracias al uso de `keyof T`, el compilador de TypeScript impide que intentemos renderizar una columna que no existe en el objeto de datos, algo que en JavaScript estándar fallaría silenciosamente devolviendo `undefined`.

## Gestión de Estados con Tipos de Utilidad
# Se ha utilizado el tipo de utilidad **`Partial<T>`** para gestionar el estado de edición de las filas.
#Justificación: En un formulario de edición, el usuario puede modificar solo un campo (por ejemplo, el nombre). JavaScript requeriría clonar el objeto completo o arriesgarse a estados incompletos. 
#Solución: `Partial<T>` permite que TypeScript entienda que el objeto de edición puede tener todas o solo algunas de las propiedades de `T`, manteniendo la seguridad de tipos sin obligar a inicializar todos los campos innecesariamente.

## Análisis de `never`
# Para llógica de reportes y estados de matrícula (reutilizada del módulo anterior), se ha aplicado el patrón de Exhaustiveness Checking**.
#Implementación: En el bloque `default` de los `switch`, se asigna el valor al tipo `never`.
#Seguridad: Si en el futuro se añade un nuevo estado (ej. "MATRICULA_EXPULSADO") y el desarrollador olvida actualizar el componente React, TypeScript arrojará un error de compilación inmediato. Esto elimina el riesgo de que el usuario vea pantallas en blanco o errores no controlados.

## Integración de Librerías Externas (`@types`)
# La implementación de la lógica de fechas mediante `luxon`/`date-fns` demuestra el manejo de ecosistemas modernos.
# Contratos de Software: Al instalar las definiciones de tipos (`@types/...`), convertimos librerías externas en herramientas seguras. La función de diferencia de días tiene firmas estrictas de entrada (`Date | DateTime`) y salida (`number`), evitando errores de formato que son comunes en JavaScript puro.
