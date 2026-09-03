# Reporte de integración E2E PostgreSQL en CI

## 1. Estado

COMPLETADO CON OBSERVACIONES

La prueba E2E real quedó integrada en el único job de CI con PostgreSQL 18 como service container. La configuración fue validada sintácticamente y la prueba pasó localmente contra PostgreSQL 18 después de restaurar Docker Desktop. No se ejecutó el workflow dentro de GitHub Actions durante esta tarea.

## 2. Objetivo verificado

Quedó automatizado el siguiente camino técnico:

```text
Prueba E2E con Supertest
        ↓
NestJS / AppModule
        ↓
GET /api/health
        ↓
AppService
        ↓
PrismaService / Prisma Client
        ↓ SELECT 1
PostgreSQL 18
```

La prueba no acepta como resultado suficiente una respuesta estática. El endpoint solo devuelve `status: ok` y `database: connected` después de que Prisma ejecute correctamente `SELECT 1` contra PostgreSQL.

## 3. Archivos creados

- `ci-postgresql-e2e-report.md`: reporte técnico de esta tarea.

## 4. Archivos modificados

- `.github/workflows/ci.yml`: se añadió PostgreSQL 18 como service container, credenciales efímeras de CI, healthcheck, generación explícita de Prisma Client y ejecución de la prueba E2E.
- `package.json`: se añadió el script raíz `test:e2e`, que delega al workspace `api`.
- `README.md`: se documentó el comando raíz de E2E, su dependencia de PostgreSQL y la consulta real realizada por el health check.

No se modificaron archivos en `docs/`, dependencias, versiones, Prisma schema ni código funcional.

## 5. Prueba E2E

La prueba existente se conserva en `apps/api/test/app.e2e-spec.ts` y se ejecuta mediante Vitest con `apps/api/vitest.config.e2e.ts`.

La prueba:

1. construye un `TestingModule` importando el `AppModule` real;
2. crea e inicializa una aplicación NestJS;
3. configura el prefijo global `/api`;
4. solicita `GET /api/health` mediante Supertest;
5. espera HTTP 200 y la respuesta `{ "status": "ok", "database": "connected" }`;
6. cierra la aplicación después de cada ejecución.

`AppService.getHealth()` ejecuta `await this.prisma.$queryRaw\`SELECT 1\``. Por ello, la prueba comprueba NestJS, inyección de `PrismaService`, Prisma Client, el adaptador PostgreSQL y conectividad real.

Resultado positivo local: 1 archivo y 1 prueba E2E aprobados contra PostgreSQL 18.

Resultado negativo controlado: cuando Docker/PostgreSQL no estaba disponible, Prisma produjo `DatabaseNotReachable`, el endpoint respondió HTTP 500 y la prueba falló al esperar HTTP 200. Esto demuestra que el health check no puede producir un falso positivo sin base de datos.

## 6. PostgreSQL en CI

- Imagen: `postgres:18`.
- Base efímera: `restgest_ci`.
- Usuario efímero: `restgest_ci`.
- Contraseña: valor no sensible exclusivo del workflow de CI.
- Puerto publicado: `5432:5432`.
- Healthcheck: `pg_isready -U restgest_ci -d restgest_ci`.
- Intervalo: 5 segundos.
- Timeout: 5 segundos.
- Reintentos: 10.
- `DATABASE_URL`: apunta a `localhost:5432/restgest_ci` y se declara únicamente como variable del job.

No se usan GitHub Secrets porque las credenciales pertenecen a un contenedor efímero creado para cada job. No se reutilizan credenciales de desarrollo ni producción.

## 7. Prisma

- Prisma Client se genera durante `npm run build` por el script `prebuild` de la API.
- Antes de E2E, CI vuelve a ejecutar explícitamente `npm run prisma:generate --workspace api` para dejar la precondición visible y verificable.
- No existe el directorio `apps/api/prisma/migrations` ni migraciones reales.
- El schema solo declara el generador y el proveedor PostgreSQL; no contiene modelos.
- No se ejecuta `prisma migrate`, `prisma migrate deploy` ni `prisma db push` porque el health check solo necesita conectividad y `SELECT 1` no requiere tablas.
- La conexión usa `@prisma/adapter-pg` y la `DATABASE_URL` efímera del job.

No se actualizó Prisma ni se modificaron sus dependencias.

## 8. Workflow final

El job único `verify` ejecuta este orden:

1. GitHub inicia el service container PostgreSQL 18 y espera su healthcheck.
2. Checkout mediante `actions/checkout@v4`.
3. Configuración de Node desde `.node-version` mediante `actions/setup-node@v4`, con caché npm.
4. Instalación reproducible con `npm ci`.
5. Typecheck con `npm run typecheck`.
6. Lint con `npm run lint`.
7. Pruebas unitarias con `npm run test`.
8. Build con `npm run build`.
9. Generación explícita de Prisma Client.
10. Prueba E2E mediante `npm run test:e2e`.

La E2E se ejecuta después del build porque así verifica primero la compilación completa de la línea base y utiliza un Prisma Client recién generado. No requiere una migración previa porque no existen modelos ni tablas.

El workflow mantiene los triggers existentes:

- `push` a `develop` y `main`;
- `pull_request` hacia `develop` y `main`.

La sintaxis y semántica básica del workflow fueron validadas con `actionlint` sin errores.

## 9. Verificaciones locales

| Comando | Resultado |
|---|---|
| Lectura de `AGENTS.md`, README, packages, Prisma, pruebas, CI y Compose | Correcto. |
| `git status --short --branch` inicial | Limpio; rama `develop`, un commit por delante de `origin/develop`. |
| `git log -3 --oneline` | Tres commits inspeccionados. |
| Comprobación de migraciones | No existe directorio de migraciones. |
| `docker compose -f infra/docker/compose.yaml config` | Correcto; imagen 18 y puerto local 5433 confirmados. |
| `npm run typecheck` | Correcto. |
| `npm run lint` | Correcto. |
| `npm run test` | Correcto; 3 pruebas unitarias aprobadas. |
| `npm run build` | Correcto; frontend y API compilados. |
| `npm run prisma:generate --workspace api` | Correcto; Prisma Client 7.10.0 generado. |
| `npm run test:e2e` sin PostgreSQL disponible | Fallo esperado: HTTP 500 y Prisma `DatabaseNotReachable`. |
| `docker desktop start` | Correcto; Docker Engine 29.2.1 restaurado y estable. |
| `docker compose -f infra/docker/compose.yaml up -d` | Correcto; servicio local restaurado. |
| `docker compose -f infra/docker/compose.yaml ps` | PostgreSQL `healthy`, host 5433 → contenedor 5432. |
| `npm run test:e2e` con PostgreSQL disponible | Correcto; 1 prueba E2E aprobada. |
| `actionlint .github/workflows/ci.yml` | Correcto, sin errores. |
| `git diff --check` | Correcto, sin errores. |
| Comprobación de `docs/` | Sin modificaciones. |

## 10. Prueba de integración

NestJS → Prisma: SÍ

Prisma → PostgreSQL: SÍ

GET /api/health → PostgreSQL: SÍ

E2E automatizado: SÍ

La ejecución positiva local confirmó el recorrido real. La ejecución negativa confirmó que la ausencia de PostgreSQL provoca el fallo esperado.

## 11. Problemas encontrados

- Docker Desktop dejó de estar disponible antes de la primera ejecución E2E local. Esto produjo el fallo controlado `DatabaseNotReachable` esperado.
- Al iniciar Docker Desktop mediante el ejecutable abrió el Engine temporalmente, se cerró y se restauró de forma estable mediante `docker desktop start`.
- La validación positiva se repitió después de confirmar tres respuestas consecutivas de `docker info` y un estado `healthy` de PostgreSQL.
- El workflow fue validado localmente, pero no puede afirmarse que GitHub Actions lo ejecutó hasta que exista un push o pull request que lo active.

No se encontraron defectos en la prueba E2E, el endpoint health ni la integración Prisma/PostgreSQL.

## 12. Deuda técnica

- Confirmar la primera ejecución real del workflow en GitHub Actions después de un push o pull request.
- Cuando existan modelos y migraciones aprobados, añadir `prisma migrate deploy` antes de la E2E de CI.
- Las cuatro alertas high conocidas del tooling Prisma permanecen sin cambios y fuera del alcance de esta tarea.

## 13. Git

- Rama: `develop`.
- Relación inicial: `develop...origin/develop [ahead 1]`.
- Staged: ninguno.
- Modificados:
  - `.github/workflows/ci.yml`;
  - `README.md`;
  - `package.json`.
- Untracked al finalizar:
  - `ci-postgresql-e2e-report.md`.
- `package-lock.json`: sin cambios, porque no se modificaron dependencias.
- `docs/`: sin cambios.

No se hizo commit, push ni cambio de rama.

## 14. Siguiente paso recomendado

Ejecutar el workflow mediante un pull request hacia `develop` y verificar en GitHub Actions que el job `verify` completa satisfactoriamente la E2E con su service container PostgreSQL 18.

ESTADO GENERAL:
COMPLETADO CON OBSERVACIONES

API → PRISMA → POSTGRESQL VERIFICADO:
SÍ

E2E INTEGRADO EN CI:
SÍ

LISTO PARA AUTENTICACIÓN Y RBAC:
SÍ

COMMIT REALIZADO:
NO

PUSH REALIZADO:
NO
