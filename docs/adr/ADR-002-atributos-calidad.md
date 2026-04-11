**ADR-002: Priorización de atributos de calidad con MoSCoW**

**Estado**
Aceptado

**Contexto**
En el Lab 1 se identificaron los atributos de calidad del sistema utilizando el estándar ISO 25010, los cuales representan los requisitos no funcionales que definen cómo debe comportarse el sistema.

Sin embargo, no todos los atributos pueden ser optimizados simultáneamente debido a limitaciones de tiempo, recursos y complejidad técnica. Por ello, es necesario priorizarlos para determinar cuáles influirán directamente en la arquitectura del sistema.

Para esta priorización se utiliza la técnica MoSCoW (Must Have, Should Have, Could Have, Won’t Have), la cual permite clasificar los atributos según su importancia para el proyecto.

**Decisión**
Se realiza la priorización de los atributos de calidad mediante la matriz MoSCoW, definiendo los siguientes grupos:

**Must Have**
Atributos críticos sin los cuales el sistema no cumple su objetivo:
- Rendimiento
- Seguridad
- Fiabilidad
- Mantenibilidad

**Should Have**
Atributos importantes que mejoran la calidad del sistema, pero no son críticos:
- Usabilidad
- Auditabilidad

**Could Have**
Atributos deseables que pueden implementarse si hay disponibilidad de tiempo:
- Compatibilidad
- Portabilidad

**Won’t Have**
Atributos fuera del alcance en esta etapa del proyecto:
- Escalabilidad masiva
- Personalización visual avanzada

**Justificación de los Must Have**

**1. Rendimiento**
El sistema debe responder en tiempos óptimos para evitar retrasos en la gestión de servicios. Se establecieron tiempos medibles (≤ 2–3 segundos), lo cual impacta directamente la eficiencia operativa y la experiencia del usuario.

**2. Seguridad**
El sistema maneja datos sensibles como credenciales, información de clientes y operaciones. Se requieren mecanismos como autenticación, cifrado y control de acceso para garantizar la protección de la información.

**3. Fiabilidad**
El sistema debe garantizar disponibilidad y correcta gestión de los datos, evitando pérdidas de información. Se estableció una disponibilidad mínima del 99% y 0% de pérdida de datos.

**4. Mantenibilidad**
El sistema debe permitir modificaciones sin afectar otros módulos. Esto es clave debido a la estructura modular del sistema (clientes, servicios, pagos, etc.), asegurando su evolución en el tiempo.

**Trade-offs Arquitectónicos**
Durante la priorización se identificaron los siguientes compromisos:
- Aumentar la seguridad puede impactar el rendimiento (validaciones, cifrado).
- Mejorar la mantenibilidad puede incrementar el tiempo de desarrollo inicial.
- Priorizar rendimiento puede limitar ciertas validaciones adicionales.

El arquitecto debe equilibrar estos factores para garantizar un sistema eficiente y sostenible.

**Trazabilidad de Decisiones**
La priorización realizada en este ADR se basa en:
- Atributos identificados en el ADR-001 (Lab 1)
- Necesidades del negocio (gestión de servicios, clientes y operaciones)
- Limitaciones del proyecto (tiempo, equipo, complejidad)

Este documento permite entender por qué se priorizaron ciertos atributos y servirá como referencia en decisiones futuras.

**Consecuencias**

**Positivas**
- Claridad en los atributos que guían la arquitectura
- Mejora en la toma de decisiones técnicas
- Reducción de ambigüedad en el desarrollo
- Base sólida para el diseño del sistema

**Negativas**
- Algunos atributos quedan en segundo plano
- Se requiere mayor esfuerzo inicial en diseño
- Posibles limitaciones en funcionalidades futuras

**Alternativas consideradas**

**1. No priorizar atributos**
Rechazado por generar ambigüedad en las decisiones arquitectónicas.

**2. Priorizar todos los atributos por igual**
Rechazado por ser inviable técnica y operativamente.

**3. Utilizar otra técnica de priorización**
Rechazado debido a que la guía del laboratorio exige el uso de MoSCoW.

**Conclusión**
Los atributos Must Have (rendimiento, seguridad, fiabilidad y mantenibilidad) se definen como los principales drivers arquitectónicos del sistema. Esta priorización establece la base para la selección del patrón arquitectónico en el Lab 3 y orienta el diseño del sistema en las siguientes etapas del proyecto.


