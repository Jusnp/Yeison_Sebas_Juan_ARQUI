**ADR-001: Identificación de atributos de calidad del sistema**

**Estado**
Aceptado

**Contexto**
En el desarrollo del sistema Green, se requiere identificar los atributos de calidad que definirán el comportamiento no funcional del sistema.

Estos atributos se basan en el estándar ISO 25010, el cual establece características de calidad como rendimiento, seguridad, fiabilidad, usabilidad, mantenibilidad, compatibilidad, portabilidad y funcionalidad.

El objetivo es traducir las necesidades del negocio en requisitos técnicos medibles, que permitan definir cómo debe comportarse el sistema en condiciones reales de operación.

**Decisión**
Se identifican los siguientes atributos de calidad como relevantes para el sistema:

- Rendimiento
- Seguridad
- Fiabilidad
- Usabilidad
- Mantenibilidad
- Compatibilidad

Cada atributo ha sido definido mediante escenarios de calidad medibles, permitiendo evaluar su cumplimiento de forma objetiva.

**Atributos de Calidad y Escenarios**

**1. Rendimiento**

**Descripción:** El sistema debe garantizar tiempos de respuesta rápidos y estables ante múltiples solicitudes.

**Escenario de calidad:** - Estímulo: 100 usuarios consultan simultáneamente el estado de sus servicios  
- Sistema: Plataforma web  
- Respuesta: El sistema responde sin degradación del servicio  
- Medida: Tiempo promedio ≤ 2 segundos, máximo ≤ 3 segundos  

**2. Seguridad**

**Descripción:** El sistema debe proteger la información mediante autenticación, autorización y cifrado.

**Escenario de calidad:** - Estímulo: Usuario intenta acceder con credenciales inválidas  
- Sistema: Módulo de autenticación  
- Respuesta: Acceso denegado y registro del intento  
- Medida: 100% accesos no autorizados bloqueados  

**3. Fiabilidad**

**Descripción:** El sistema debe garantizar disponibilidad y consistencia de los datos.

**Escenario de calidad:** - Estímulo: Registro de una solicitud de servicio  
- Sistema: Base de datos  
- Respuesta: Información almacenada correctamente  
- Medida: 0% pérdida de datos, disponibilidad ≥ 99%  

**4. Usabilidad**

**Descripción:** El sistema debe ser intuitivo y fácil de usar.

**Escenario de calidad:** - Estímulo: Usuario nuevo solicita un servicio  
- Sistema: Interfaz web  
- Respuesta: Completa el proceso sin ayuda  
- Medida: ≤ 3 pasos, tiempo ≤ 2 minutos  

**5. Mantenibilidad**

**Descripción:** El sistema debe permitir cambios sin afectar otros módulos.

**Escenario de calidad:** - Estímulo: Modificación del módulo de facturación  
- Sistema: Arquitectura del sistema  
- Respuesta: Cambio sin afectar otros módulos  
- Medida: Impacto ≤ 1 módulo adicional  

**6. Compatibilidad**

**Descripción:** El sistema debe funcionar en diferentes navegadores.

**Escenario de calidad:** - Estímulo: Acceso desde distintos navegadores  
- Sistema: Aplicación web  
- Respuesta: Funciona correctamente  
- Medida: Compatibilidad ≥ 95% navegadores modernos  

**Justificación**
Los atributos identificados reflejan las necesidades del negocio, especialmente en:

- Reducción de tiempos de atención (rendimiento)
- Protección de la información (seguridad)
- Disponibilidad del sistema (fiabilidad)
- Facilidad de uso para clientes (usabilidad)
- Capacidad de evolución del sistema (mantenibilidad)

Estos atributos actuarán como drivers arquitectónicos en las siguientes etapas del proyecto.

**Consecuencias**

**Positivas**
- Claridad en los requisitos no funcionales
- Base sólida para decisiones arquitectónicas
- Facilita la validación del sistema

**Negativas**
- Requiere mayor esfuerzo en diseño y desarrollo
- Puede limitar decisiones técnicas futuras

**Conclusión**
La identificación de atributos de calidad permite establecer criterios claros de cómo debe comportarse el sistema. Estos atributos serán utilizados como base para la priorización (Lab 2) y la selección del patrón arquitectónico (Lab 3).
