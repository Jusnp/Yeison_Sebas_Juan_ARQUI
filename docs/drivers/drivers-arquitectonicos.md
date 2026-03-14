# Drivers Arquitectónicos

Este documento reúne los drivers arquitectónicos identificados para el sistema del proyecto, organizados en tres categorías: funcionales, atributos de calidad y restricciones. Su propósito es servir como base para la toma de decisiones de arquitectura, priorización técnica y diseño de la solución.

---

## 1. Drivers Funcionales

| ID Driver | Tipo | Descripción del Driver (Escenario) | Prioridad | Impacto | Componente / Decisión Arquitectónica Asociada |
|---|---|---|---|---|---|
| DR-01 | Caso de Uso Primario | El sistema debe permitir que el cliente solicite un servicio (mantenimiento, instalación o revisión) y hacer seguimiento en línea del estado de su solicitud. | Alta | Alto | Portal web + Módulo de solicitudes + Workflow de estados + Base de datos |
| DR-02 | Caso de Uso Primario | El sistema debe enviar recordatorios automáticos de mantenimiento preventivo según la periodicidad recomendada y permitir elegir el canal de comunicación. | Alta | Alto | Motor de notificaciones + Scheduler + Preferencias de comunicación |
| DR-03 | Caso de Uso Primario | El sistema debe generar reportes completos de los servicios realizados y permitir descargarlos en formato PDF. | Alta | Medio | Módulo de reportes + Generador PDF + Repositorio documental |
| DR-04 | Caso de Uso Primario | El sistema debe permitir registrar y administrar la información de clientes para mantener un historial de servicios y consultas. | Alta | Alto | Módulo de gestión de clientes + Base de datos |
| DR-05 | Caso de Uso Primario | El sistema debe permitir programar servicios y asignar técnicos responsables según disponibilidad. | Alta | Alto | Módulo de agenda + Gestión de técnicos |
| DR-06 | Caso de Uso Primario | El sistema debe registrar la ejecución del servicio realizado por el técnico, incluyendo observaciones y estado final del mantenimiento. | Alta | Alto | Registro de servicio + Historial operativo |

---

## 2. Drivers de Atributos de Calidad

| ID Driver | Tipo | Descripción del Driver (Escenario) | Prioridad | Impacto | Componente / Decisión Arquitectónica Asociada |
|---|---|---|---|---|---|
| DR-07 | Atributo de Calidad (Disponibilidad / Confiabilidad) | El sistema debe mantenerse disponible de forma continua para permitir registrar y consultar información en cualquier momento. | Alta | Alto | Infraestructura de despliegue + Monitoreo + Recuperación ante fallos |
| DR-08 | Atributo de Calidad (Rendimiento) | El sistema debe ofrecer tiempos de respuesta rápidos en consultas y registros realizados desde la plataforma web. | Media | Medio | Optimización de base de datos + Índices + Caché |
| DR-09 | Atributo de Calidad (Seguridad) | Las contraseñas deben almacenarse de forma encriptada y las operaciones importantes deben quedar registradas para auditoría. | Alta | Alto | Autenticación + Control de acceso + Registro de auditoría |

---

## 3. Drivers de Restricción

| ID Driver | Tipo | Descripción del Driver (Escenario) | Prioridad | Impacto | Componente / Decisión Arquitectónica Asociada |
|---|---|---|---|---|---|
| DR-10 | Restricción Técnica / Diseño | El sistema debe implementarse utilizando Java y operar como una aplicación web con base de datos MySQL. | Alta | Medio | Stack tecnológico Java + MySQL |
| DR-11 | Restricción de Negocio / Cumplimiento | El sistema debe apoyar el cumplimiento de normativas ambientales relacionadas con mantenimiento y registros de servicios. | Media | Medio | Gestión documental + Reportes de cumplimiento |

---

## 4. Observaciones

- Los drivers funcionales definen las capacidades principales que el sistema debe ofrecer a clientes, técnicos y administradores.
- Los drivers de calidad orientan decisiones relacionadas con rendimiento, seguridad, disponibilidad y confiabilidad.
- Los drivers de restricción establecen límites tecnológicos y normativos que deben respetarse durante el diseño e implementación.
- Este documento servirá como insumo para la selección del patrón arquitectónico, la elaboración de ADRs y la construcción de los diagramas C4.
