# ADR-003: Selección del patrón arquitectónico

## Estado
Aceptado

## Contexto
En el desarrollo del sistema Green se requiere seleccionar un patrón arquitectónico adecuado, basado en los atributos de calidad definidos en el Lab 1 y priorizados en el Lab 2.

Los atributos Must Have identificados fueron:
- Rendimiento
- Seguridad
- Mantenibilidad
- Fiabilidad

Se evaluaron dos alternativas:
- Arquitectura en 3 Capas
- Arquitectura de Microservicios

Adicionalmente, se aplicó el cuestionario de evaluación arquitectónica, obteniendo un puntaje total de 10, lo cual indica un contexto intermedio que requiere análisis y justificación adicional.

---

## Decisión

Se selecciona la **Arquitectura en 3 Capas** como patrón arquitectónico del sistema.

Esta arquitectura divide el sistema en:
- Capa de presentación
- Capa de negocio
- Capa de datos

---

## Justificación

Aunque el resultado del cuestionario sugiere evaluar con el profesor, se toma la decisión de utilizar arquitectura en 3 capas basándose en:

- El sistema tiene un dominio principal (gestión de servicios).
- Los módulos están altamente relacionados (clientes, servicios, pagos, reportes).
- El equipo tiene poca experiencia en microservicios.
- El tiempo de desarrollo es limitado.
- No se requiere escalabilidad masiva.

Además, los atributos Must Have del Lab 2 se satisfacen mejor con una arquitectura en 3 capas:

- **Rendimiento:** permite tiempos de respuesta adecuados sin complejidad adicional.
- **Seguridad:** se puede implementar de forma centralizada.
- **Mantenibilidad:** facilita cambios en un sistema modular pero unificado.
- **Fiabilidad:** reduce puntos de falla al no depender de múltiples servicios.

---

## Consecuencias

### Positivas
- Menor complejidad arquitectónica
- Desarrollo más rápido
- Mayor facilidad de mantenimiento
- Menor costo de infraestructura

### Negativas
- Menor escalabilidad independiente por módulo
- Menor flexibilidad para despliegues separados

---

## Alternativas consideradas

### Microservicios

Se descartó porque:

- El equipo no tiene experiencia sólida en microservicios
- Requiere mayor complejidad operacional (contenedores, orquestación)
- Los dominios del sistema no son completamente independientes
- Los datos están altamente relacionados
- No se espera alta carga de usuarios concurrentes

---

## Conclusión

La arquitectura en 3 capas es la mejor opción para el sistema Green, ya que se ajusta al contexto del proyecto, a las capacidades del equipo y a los atributos de calidad priorizados.

Esta decisión está fundamentada en evidencia obtenida en los Labs 1, 2 y 3, y guiará el diseño del sistema en las siguientes etapas.

