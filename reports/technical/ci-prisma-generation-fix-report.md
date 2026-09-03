# Corrección de generación de Prisma Client en CI

Fecha de verificación: 2026-09-03

## 1. Estado

La causa del fallo observado en la primera ejecución real de GitHub Actions fue reproducida y confirmada. El workflow fue corregido con un cambio mínimo: ahora genera Prisma Client inmediatamente después de `npm ci` y antes de `typecheck`.

La corrección fue registrada en el commit `d9ef5de` y enviada a la rama `develop`. La ejecución remota número 2 del workflow `CI` fue verificada manualmente y terminó en `Success`; el job `Verify technical baseline`, PostgreSQL 18 y la prueba E2E finalizaron correctamente.

## 2. Fallo observado en GitHub

El job `Verify technical baseline` del commit `858903b` terminó con errores de TypeScript:

- No se encontraba `../generated/prisma/client.js` ni sus declaraciones de tipos.
- TypeScript indicaba que `$queryRaw` no existía en `PrismaService`.
- TypeScript indicaba que `$disconnect` no existía en `PrismaService`.

El workflow ejecutaba `npm run typecheck` antes del paso `Generate Prisma Client`. En un checkout limpio, `apps/api/src/generated/prisma/` todavía no existe porque es un artefacto regenerable y está excluido del control de versiones.

## 3. Causa raíz

La causa raíz fue el orden de los pasos del workflow.

El generador `prisma-client`, definido en `apps/api/prisma/schema.prisma`, escribe el cliente en `apps/api/src/generated/prisma/`. El comando responsable es:

```text
npm run prisma:generate --workspace api
```

La carpeta está correctamente ignorada mediante `apps/api/src/generated/prisma/` en `.gitignore` y no contiene archivos versionados.

`apps/api/src/prisma/prisma.service.ts` importa `PrismaClient` desde `../generated/prisma/client.js` y `PrismaService` hereda de esa clase. Cuando el módulo generado no existe, TypeScript no puede resolver la clase base; por esa consecuencia también deja de reconocer los métodos heredados `$queryRaw` y `$disconnect`. No fue necesario modificar `PrismaService`, `AppService`, el endpoint de salud ni el esquema de Prisma.

## 4. Reproducción local

La carpeta generada ya estaba ausente al iniciar la comprobación y se confirmó que era un artefacto ignorado. El primer `typecheck` en el directorio de trabajo pasó debido a cachés incrementales locales de TypeScript, por lo que se realizó la reproducción determinante en un clon local limpio y temporal, con dependencias instaladas sin ejecutar scripts de generación.

### ANTES de prisma generate

Resultado: **fallo, exit code 1**.

Se reprodujeron exactamente los tres errores relevantes:

```text
Property '$queryRaw' does not exist on type 'PrismaService'.
Cannot find module '../generated/prisma/client.js' or its corresponding type declarations.
Property '$disconnect' does not exist on type 'PrismaService'.
```

### DESPUÉS de prisma generate

Resultado: **correcto, exit code 0**.

`prisma generate` creó Prisma Client 7.10.0 en `apps/api/src/generated/prisma/`. Al repetir `npm run typecheck`, desaparecieron los tres errores.

## 5. Corrección aplicada

Se modificó únicamente `.github/workflows/ci.yml`. El paso `Generate Prisma Client` fue movido desde después del build hasta inmediatamente después de `Install dependencies`.

No se modificaron código funcional, esquema, pruebas, dependencias, lockfile, Docker ni configuración de PostgreSQL. Se conservó la generación adicional que ejecuta el script `prebuild` del API para evitar cambios innecesarios.

## 6. Archivos modificados

Corrección incluida en el commit:

- `.github/workflows/ci.yml`

Reporte creado después del push y no incluido en el commit:

- `reports/technical/ci-prisma-generation-fix-report.md`

El archivo preexistente `reports/technical/github-ci-first-run-report.md` permaneció sin cambios y fuera del commit de corrección. Al iniciar la tarea aparecía agregado al índice de Git (`A`), no simplemente como archivo sin rastrear.

## 7. Orden final del workflow

1. Checkout.
2. Setup Node.
3. `npm ci`.
4. Prisma generate.
5. Typecheck.
6. Lint.
7. Unit tests.
8. Build.
9. E2E.

El service container de PostgreSQL 18 se mantuvo sin cambios.

## 8. Verificaciones locales

| Comando | Resultado |
|---|---|
| `npm run prisma:generate --workspace api` | Correcto, exit code 0 |
| `npm run typecheck` | Correcto, exit code 0 |
| `npm run lint` | Correcto, exit code 0 |
| `npm run test` | Correcto, exit code 0; web: 2 pruebas, API: 1 prueba |
| `npm run build` | Correcto, exit code 0 |
| `npm run test:e2e` | Correcto, exit code 0; 1 prueba con PostgreSQL local |
| `docker compose -f infra/docker/compose.yaml config` | Correcto, exit code 0 |
| `git diff --check` | Correcto, exit code 0 |
| `actionlint .github/workflows/ci.yml` | Correcto, exit code 0, ejecutado mediante `rhysd/actionlint:latest` porque el binario no estaba instalado localmente |

PostgreSQL 18 estaba `healthy` durante la E2E. La primera invocación directa de E2E falló por ausencia de `DATABASE_URL` y una segunda prueba usó por error una contraseña distinta a la documentada; ninguna implicó cambios en archivos. La verificación definitiva se ejecutó con la URL local coherente con `.env.example` y terminó correctamente.

## 9. Warning de GitHub Actions

El warning sobre Node.js 20 pertenece al runtime interno usado por `actions/checkout@v4` y `actions/setup-node@v4`; es independiente de Node.js 24 configurado para ejecutar el proyecto mediante `.node-version`.

GitHub anunció la retirada de Node.js 20 de los runners y recomienda que los consumidores migren a versiones recientes de las Actions que utilicen Node.js 24. `actions/checkout@v5` y `actions/setup-node@v5` introdujeron ese cambio de runtime y requieren un runner compatible. Fuentes oficiales:

- [Deprecation of Node 20 on GitHub Actions runners](https://github.blog/changelog/2025-09-19-deprecation-of-node-20-on-github-actions-runners/)
- [actions/checkout](https://github.com/actions/checkout)
- [actions/setup-node](https://github.com/actions/setup-node)

El warning no produjo los errores de resolución de Prisma y no representó un bloqueo inmediato para esta corrección. Conforme al alcance de la tarea, no se actualizaron las versiones de las Actions.

## 10. Commit y push

- Commit: `d9ef5de fix: generate prisma client before ci checks`
- Rama: `develop`
- Push: realizado correctamente a `origin/develop`.
- Contenido del commit: únicamente `.github/workflows/ci.yml`.

El servidor remoto informó durante ese push que el repositorio fue movido a `https://github.com/Andriu-Dex/rest-gest-mateos.git`; el push mediante la URL anterior fue redirigido y completado correctamente. La URL de `origin` fue corregida posteriormente como parte del cierre documental de la línea base.

## 11. Nueva ejecución verificada

La ejecución número 2 del workflow `CI`, correspondiente al commit `d9ef5de` en la rama `develop`, fue revisada manualmente y terminó en `Success`.

- Workflow: `CI`.
- Rama: `develop`.
- Ejecución: número 2.
- Resultado: `Success`.
- Job `Verify technical baseline`: `Success`.
- PostgreSQL service: operativo.
- Pruebas unitarias: correctas.
- E2E remota contra PostgreSQL: aprobada.

La ejecución número 1 del commit `858903b` permanece documentada como fallida. Su causa raíz fue el orden incorrecto de `prisma generate`; el commit `d9ef5de` corrigió el workflow al generar Prisma Client antes de `typecheck`.

---

CAUSA RAÍZ CONFIRMADA:
SÍ

PRISMA GENERADO ANTES DE TYPECHECK:
SÍ

VERIFICACIONES LOCALES VERDES:
SÍ

NUEVO PUSH REALIZADO:
SÍ

CI REMOTO:
SUCCESS
