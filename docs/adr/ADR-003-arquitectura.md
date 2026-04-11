**ADR-003: Selección del patrón arquitectónico**

**Estado**
Aceptado

**Contexto**
En el desarrollo del sistema Green se requiere seleccionar un patrón arquitectónico adecuado, basado en los atributos de calidad definidos en el Lab 1 y priorizados en el Lab 2.

Los atributos Must Have identificados fueron:
- Rendimiento
- Seguridad
- Mantenibilidad
- Fiabilidad

Se evaluaron dos alternativas: Arquitectura en 3 Capas y Arquitectura de Microservicios. Adicionalmente, se aplicó el cuestionario de evaluación arquitectónica, obteniendo un puntaje total de 10, lo cual indica un contexto intermedio que requiere análisis y justificación adicional.

**Decisión**
Se selecciona la **Arquitectura en 3 Capas** como patrón arquitectónico del sistema.

Esta arquitectura divide el sistema en:
- Capa de presentación
- Capa de negocio
- Capa de datos

**Justificación**
Aunque el resultado del cuestionario sugiere evaluar con el profesor, se toma la decisión de utilizar arquitectura en 3 capas basándose en los siguientes puntos:

- El sistema tiene un dominio principal (gestión de servicios).
- Los módulos están altamente relacionados (clientes, servicios, pagos, reportes).
- El equipo tiene poca experiencia en microservicios.
- El tiempo de desarrollo es limitado.
- No se requiere escalabilidad masiva.

Además, los atributos Must Have del Lab 2 se satisfacen mejor con esta estructura:
- **Rendimiento:** permite tiempos de respuesta adecuados sin la latencia de red de los microservicios.
- **Seguridad:** permite una implementación y control centralizado más simple.
- **Mantenibilidad:** facilita cambios en un sistema modular pero unificado dentro de un mismo repositorio.
- **Fiabilidad:** reduce los puntos críticos de falla al no depender de la orquestación de múltiples servicios independientes.

**Consecuencias**

**Positivas**
- Menor complejidad arquitectónica.
- Desarrollo y despliegue más rápido.
- Mayor facilidad de mantenimiento inicial.
- Menor costo de infraestructura.

**Negativas**
- Menor escalabilidad independiente por cada módulo.
- Menor flexibilidad para realizar despliegues totalmente separados.

**Alternativas consideradas**

**Microservicios**
Se descartó esta opción porque:
- El equipo no cuenta con una experiencia sólida en este patrón.
- Requiere una complejidad operacional elevada (contenedores, orquestación, service discovery).
- Los dominios del sistema no son lo suficientemente independientes entre sí.
- Los datos están altamente relacionados, lo que dificultaría la gestión de bases de datos distribuidas.
- No se espera una carga de usuarios concurrentes que justifique esta infraestructura.

**Conclusión**
La arquitectura en 3 capas es la mejor opción para el sistema Green, ya que se ajusta al contexto real del proyecto, a las capacidades actuales del equipo y a los atributos de calidad priorizados. Esta decisión está fundamentada en la evidencia obtenida en los Labs 1, 2 y 3, y guiará el diseño detallado del sistema.
