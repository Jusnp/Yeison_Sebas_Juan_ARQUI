# Yeison_Sebas_Juan_ARQUI

Repositorio del equipo para los laboratorios de Arquitectura de Software.

## Integrantes
- Juan
- Yeison
- Sebas

## Estrategia de ramas
- `main`: código estable y aprobado
- `develop`: integración continua
- `feature/nombre-funcionalidad`: ramas de trabajo individuales

## Convención de commits
Formato:
`tipo(alcance): descripción`

Ejemplos:
- `feat(auth): agregar autenticación con JWT`
- `fix(users): corregir validación de correo`
- `docs(adr): crear ADR-003 de arquitectura`
- `refactor(service): separar responsabilidades de UserManager`

## Estructura del repositorio
- `docs/adr/`: decisiones arquitectónicas
- `docs/c4/`: diagramas del modelo C4
- `.github/`: plantillas y workflows

## Flujo de trabajo
1. Crear rama desde `develop`
2. Trabajar en `feature/...`
3. Hacer commits semánticos
4. Abrir Pull Request hacia `develop`
5. Una vez validado, pasar a `main`
