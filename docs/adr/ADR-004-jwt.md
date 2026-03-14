# ADR-004: Seguridad mediante autenticación JWT

## Estado
Propuesto

## Fecha
2026-03-13

## Contexto
El sistema requiere proteger rutas y autenticar usuarios de forma segura.

## Decisión
Implementar autenticación basada en JWT, usando access tokens y refresh tokens.

## Consecuencias positivas
- Seguridad en rutas protegidas
- Escalabilidad para APIs REST

## Consecuencias negativas
- Mayor complejidad en manejo de sesiones
- Necesidad de proteger llaves y expiraciones

## Alternativas consideradas
- Sesiones tradicionales
- Basic Auth
