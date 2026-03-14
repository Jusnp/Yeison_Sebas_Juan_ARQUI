# ADR-003: Selección del patrón arquitectónico base

## Estado
Propuesto

## Fecha
2026-03-13

## Contexto
Se requiere elegir un patrón arquitectónico que responda a los atributos de calidad priorizados.

## Decisión
Adoptar una arquitectura en 3 capas como base del proyecto:
- Presentación
- Negocio
- Datos

## Consecuencias positivas
- Simplicidad de implementación
- Facilidad de comprensión para el equipo
- Buena mantenibilidad inicial

## Consecuencias negativas
- Menor flexibilidad que una arquitectura hexagonal
- Escalabilidad lógica limitada frente a microservicios

## Alternativas consideradas
- Arquitectura hexagonal
- Microservicios
