# ADR-005: Contenerización y automatización CI/CD

## Estado
Propuesto

## Fecha
2026-03-13

## Contexto
Se requiere empaquetar la aplicación y automatizar validaciones y despliegue.

## Decisión
Usar Docker multi-stage, docker-compose y GitHub Actions para integración y despliegue continuo.

## Consecuencias positivas
- Entornos consistentes
- Automatización de pruebas y despliegues
- Mejor trazabilidad

## Consecuencias negativas
- Curva de aprendizaje inicial
- Mayor configuración del repositorio

## Alternativas consideradas
- Despliegue manual
- Contenedor simple sin pipeline
