# ADR-001: Aplicación de principios SOLID al módulo de usuarios

## Estado
Propuesto

## Fecha
2026-03-13

## Contexto
El código monolítico UserManager mezcla validación, acceso a datos y envío de correos, dificultando el mantenimiento y violando SRP y DIP.

## Decisión
Separar responsabilidades en componentes independientes como UserValidator, UserRepository y EmailService. Además, introducir interfaces para reducir acoplamiento.

## Consecuencias positivas
- Mayor mantenibilidad
- Mejor testabilidad
- Bajo acoplamiento

## Consecuencias negativas
- Más archivos y estructura inicial
- Mayor esfuerzo de diseño

## Alternativas consideradas
- Mantener la clase monolítica
- Separar parcialmente sin interfaces
