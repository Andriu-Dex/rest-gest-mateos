# Reporte de endurecimiento de línea base técnica

## 1. Estado

COMPLETADO CON OBSERVACIONES

La línea base quedó fijada, documentada y validada mediante instalación limpia aislada, verificaciones locales y validación sintáctica del workflow. Permanecen cuatro alertas `high` transitivas asociadas al paquete Prisma, sin una corrección compatible y segura disponible dentro de la versión mayor seleccionada.

## 2. Archivos creados

- `.github/workflows/ci.yml`: workflow de integración continua.
- `.node-version`: versión de Node.js de referencia para desarrollo y CI.
- `technical-baseline-hardening-report.md`: reporte técnico de esta tarea.

## 3. Archivos modificados

- `package.json`: se fijaron Node.js 24.19.x, npm 11.17.x y `packageManager: npm@11.17.0`.
- `package-lock.json`: npm actualizó los metadatos de la raíz para reflejar `engines` y `packageManager`; no se cambió deliberadamente ninguna dependencia de aplicación.
- `README.md`: se documentaron versiones, npm workspaces, instalación reproducible con `npm ci` y funcionamiento de CI.

No se modificó ningún archivo dentro de `docs/`.

## 4. Versiones fijadas

Node: 24.19.x; versión de referencia exacta 24.19.0 en `.node-version`.

npm: 11.17.x; gestor de referencia exacto npm 11.17.0.

Gestor: npm mediante npm workspaces.

Lockfile: `package-lock.json`, lockfileVersion 3.

## 5. Scripts raíz

| Script | Función |
|---|---|
| `npm run dev:web` | Inicia Vite para desarrollo del frontend. |
| `npm run dev:api` | Inicia NestJS en modo watch. |
| `npm run typecheck` | Ejecuta la comprobación TypeScript de todos los workspaces. |
| `npm run lint` | Ejecuta ESLint en web y Oxlint en API. |
| `npm run test` | Ejecuta las pruebas unitarias de todos los workspaces. |
| `npm run build` | Compila web y API; el prebuild de API genera Prisma Client. |

No se añadieron orquestadores ni dependencias en la raíz.

## 6. CI

Se creó `.github/workflows/ci.yml` con los siguientes triggers:

- `pull_request` hacia `develop` y `main`;
- `push` a `develop` y `main`.

El único job, `verify`, usa `ubuntu-latest` y permisos de solo lectura. Ejecuta:

1. `actions/checkout@v4`;
2. `actions/setup-node@v4`, leyendo `.node-version` y habilitando caché npm;
3. `npm ci`;
4. `npm run typecheck`;
5. `npm run lint`;
6. `npm run test`;
7. `npm run build`.

CI utiliza Node.js 24.19.0. Se define una `DATABASE_URL` efímera y no sensible porque `prisma generate`, ejecutado durante el build, exige una URL sintácticamente válida pero no abre una conexión.

No se añadió PostgreSQL como service container: `npm run test` ejecuta tres pruebas unitarias que no requieren base de datos. La prueba E2E existente sí requiere PostgreSQL, pero no forma parte del script unitario solicitado para esta línea base. Añadir un servicio que el job actual no consume introduciría costo y complejidad innecesarios.

El workflow fue validado con `rhysd/actionlint` en un contenedor efímero y no produjo errores.

## 7. Auditoría de seguridad

| Paquete | Severidad | Cadena | Runtime/Dev | Corrección disponible | Decisión |
|---|---|---|---|---|---|
| `prisma@7.10.0` | High, agregada | `api → prisma` | CLI/tooling directo en `devDependencies`; npm también lo conserva por el peer opcional de Client | npm propone `prisma@6.19.3`, cambio mayor regresivo; `latest` es `8.0.0-rc.12` | Mantener 7.10.0 fijado y monitorizar una corrección estable. |
| `@prisma/config@7.10.0` | High, transitiva | `prisma → @prisma/config` | Configuración del CLI, no importada por el servidor en runtime | No hay release compatible de Prisma 7 que sustituya su dependencia vulnerable | Mantener como riesgo controlado. |
| `deepmerge-ts@7.1.5` | High | `prisma → @prisma/config → deepmerge-ts` | Tooling/configuración; exposición ligada a procesar grafos recursivos no confiables | `deepmerge-ts@8.0.2` está corregido, pero Prisma fija 7.1.5; override mayor no validado | No aplicar override sin soporte de Prisma. |
| `mysql2@3.15.3` | High | `prisma → mysql2` | Dependencia multibase del CLI Prisma; la aplicación usa PostgreSQL y `@prisma/adapter-pg` | `mysql2@3.24.3` está corregido, pero Prisma fija 3.15.3; override no validado | No se usa MySQL; mantener y monitorizar actualización de Prisma. |

Las cuatro alertas corresponden a dos advisories directos (`deepmerge-ts` y `mysql2`) y a dos paquetes ascendentes marcados por propagación (`@prisma/config` y `prisma`).

`mysql2` aparece porque el paquete CLI `prisma` incluye soporte para varios motores. RestGest Mateos no configura ni importa MySQL; el runtime usa `@prisma/client`, `@prisma/adapter-pg` y `pg` para PostgreSQL.

No se ejecutó `npm audit fix --force`, no se cambió Prisma de versión mayor y no se añadieron overrides.

## 8. Riesgo residual

`npm audit` y `npm audit --omit=dev` reportan cuatro vulnerabilidades `high`. npm incluye Prisma en el árbol producido por `--omit=dev` debido al peer opcional declarado por `@prisma/client`, por lo que el conteo formal de vulnerabilidades runtime/production permanece en cuatro.

La exposición operativa es más limitada que ese conteo: el servidor compilado no importa `prisma`, `@prisma/config`, `deepmerge-ts` ni `mysql2`; estos se utilizan o incorporan a través del CLI durante generación y migraciones. Tampoco se conecta a MySQL ni procesa configuración suministrada por usuarios finales.

Se acepta temporalmente el riesgo porque las alternativas reportadas son:

- retroceder a Prisma 6.19.3 mediante una corrección forzada y potencialmente incompatible;
- usar Prisma 8 prerelease, expresamente prohibido para esta línea base;
- forzar overrides mayores de transitivas sin garantía de compatibilidad.

El riesgo debe revisarse cuando Prisma publique una versión estable compatible que actualice ambas dependencias.

## 9. Instalación reproducible

Los dos primeros intentos de `npm ci` sobre el workspace fallaron con `EBUSY` porque Windows mantuvo locks transitorios dentro de `node_modules`. La política del entorno impidió retirar ese directorio incluso después de validar su ruta absoluta.

Para evitar una operación destructiva, se creó un directorio temporal nuevo y se copiaron únicamente `package.json`, `package-lock.json`, `.node-version` y `apps/`. En ese entorno sin `node_modules` previo se ejecutó correctamente:

```text
npm ci
added 710 packages, and audited 713 packages
```

Después de la instalación limpia también pasaron typecheck, lint, pruebas y build. El workspace original fue restaurado con `npm install` y volvió a pasar las mismas verificaciones.

Resultado: `package-lock.json` permite reconstruir correctamente el monorepo desde cero.

## 10. Verificaciones

| Comando | Resultado |
|---|---|
| Lectura completa de `AGENTS.md` | Correcto. |
| Lectura de `README.md` y los tres `package.json` | Correcto. |
| `git status --short --branch` inicial | Repositorio limpio en `main`. |
| `git diff` inicial | Sin cambios. |
| `git diff --cached` inicial | Sin cambios staged. |
| `node --version` | `v24.19.0`. |
| `npm --version` | `11.17.0`. |
| `docker info` | Engine 29.2.1 disponible. |
| `docker compose version` | v5.0.2. |
| `npm audit` | 4 vulnerabilidades high. |
| `npm audit --omit=dev` | 4 vulnerabilidades high. |
| `npm explain prisma` | Prisma 7.10.0 directo de desarrollo y peer opcional de Client. |
| `npm explain @prisma/config` | Transitiva de Prisma CLI. |
| `npm explain deepmerge-ts` | Versión 7.1.5 mediante `@prisma/config`. |
| `npm explain mysql2` | Versión 3.15.3 mediante Prisma CLI. |
| `npm ls prisma @prisma/config deepmerge-ts mysql2` | Cadena reproducida correctamente. |
| Primer `npm ci` local | Falló con `EBUSY` en `@microsoft/tsdoc`. |
| Segundo `npm ci` local | Falló con `EBUSY` en dependencia interna de Nest schematics. |
| `npm ci --prefix <directorio-temporal>` | Correcto desde cero: 710 paquetes. |
| `npm run typecheck --prefix <directorio-temporal>` | Correcto. |
| `npm run lint --prefix <directorio-temporal>` | Correcto. |
| `npm run test --prefix <directorio-temporal>` | Correcto: 2 archivos y 3 pruebas. |
| `npm run build --prefix <directorio-temporal>` | Correcto: web y API compiladas. |
| `rhysd/actionlint .github/workflows/ci.yml` | Correcto, sin salida de errores. |
| `npm install` en workspace | Correcto; instalación local restaurada. |
| `npm run typecheck` final | Correcto. |
| `npm run lint` final | Correcto. |
| `npm run test` final | Correcto: 3 pruebas. |
| `npm run build` final | Correcto: web y API. |
| `docker compose -f infra/docker/compose.yaml config` | Correcto. |
| `docker compose -f infra/docker/compose.yaml ps` | PostgreSQL healthy. |
| `git diff --check` | Correcto, sin errores. |
| `git status --short --branch` previo al reporte | Cambios esperados en `main`, ninguno staged. |

## 11. Docker/PostgreSQL

- Imagen: `postgres:18`.
- Versión previamente verificada del contenedor actual: PostgreSQL 18.6.
- Estado final: `healthy`.
- Puerto host: `5433`.
- Puerto interno: `5432`.
- Volumen persistente: `docker_postgres_data`.
- Montaje: `/var/lib/postgresql`.
- Compose válido.
- El contenedor permanece en ejecución.

No se cambió el puerto ni la configuración de Docker.

## 12. Git

- Rama: `main`.
- Relación remota: `main...origin/main`.
- Staged: ninguno.
- Unstaged antes de crear este reporte:
  - `README.md`;
  - `package-lock.json`;
  - `package.json`.
- Untracked antes de crear este reporte:
  - `.github/workflows/ci.yml`;
  - `.node-version`.
- Untracked añadido al final:
  - `technical-baseline-hardening-report.md`.

El cambio staged previo en `.gitignore` mencionado por el plan ya no existía al iniciar esta tarea: el repositorio estaba limpio y `.gitignore` no fue modificado. No se cambió de rama, no se hizo commit y no se hizo push.

## 13. Deuda técnica

- Resolver las cuatro alertas high cuando exista una versión estable y compatible de Prisma que actualice `deepmerge-ts` y `mysql2`.
- Decidir si la prueba E2E con PostgreSQL debe incorporarse a CI en una fase posterior; hacerlo requerirá un service container o una estrategia equivalente.
- Revisar el aviso de deprecación de ESLint 9 heredado del scaffold de Vite cuando se planifique una actualización compatible del tooling.
- Evaluar la política `allowScripts` de npm para Prisma en una tarea específica de cadena de suministro, sin aprobar scripts automáticamente.

## 14. Siguiente paso recomendado

Incorporar la prueba E2E de `GET /api/health` al workflow de CI usando un service container efímero PostgreSQL 18, para automatizar también la verificación API → Prisma → PostgreSQL.

ESTADO GENERAL:
COMPLETADO CON OBSERVACIONES

LÍNEA BASE TÉCNICA ESTABLE:
SÍ

VULNERABILIDADES RUNTIME HIGH:
4

CI CONFIGURADO:
SÍ

COMMIT REALIZADO:
NO

PUSH REALIZADO:
NO
