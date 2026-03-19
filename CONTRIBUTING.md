# Guía de Contribución

## Estrategia de ramas
- `main`: versión estable y aprobada
- `develop`: integración de avances
- `feature/nombre-funcionalidad`: trabajo individual o por funcionalidad

### Ejemplos
- `feature/juan-drivers`
- `feature/yeison-adr-arquitectura`
- `feature/sebas-jwt`

## Convención de commits
Formato:

`tipo(alcance): descripción`

### Tipos permitidos
- `feat`: nueva funcionalidad
- `fix`: corrección de errores
- `docs`: cambios en documentación
- `refactor`: refactorización
- `test`: pruebas
- `ci`: integración continua

## Pull Requests
- No trabajar directamente sobre `main`
- Todo cambio debe integrarse primero en `develop`
- Los cambios importantes deben pasar por Pull Request
- La documentación debe mantenerse actualizada

## Reglas del equipo
- Respetar la estructura por semanas
- Nombrar los archivos según el entregable
- Documentar decisiones arquitectónicas en ADR
- Mantener coherencia entre documentación y código
