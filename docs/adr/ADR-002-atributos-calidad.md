# ADR-002: Priorización de atributos de calidad

## Estado
Propuesto

## Fecha
2026-03-13

## Contexto
Se requiere identificar y priorizar los atributos de calidad críticos del sistema con base en ISO 25010.

## Decisión
Se priorizan como Must Have:
- Rendimiento: respuesta menor a 2 segundos
- Seguridad: autenticación con JWT
- Mantenibilidad: código modular
- Fiabilidad: disponibilidad del 99.5%

## Consecuencias positivas
- Claridad sobre prioridades arquitectónicas
- Base para decisiones de diseño

## Consecuencias negativas
- Se dejan atributos secundarios para etapas posteriores

## Alternativas consideradas
- Priorizar todos por igual
- Priorizar solo seguridad y rendimiento
