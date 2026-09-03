# RestGest Mateos

Base técnica anticipada del sistema web responsive de Restaurante Mateos. Este repositorio es un monorepo con una aplicación React y una API NestJS. El bootstrap no representa el cierre formal de la actividad 3.1 ni incluye lógica funcional del restaurante.

## Requisitos

- Node.js 24.15 o posterior dentro de la línea 24 LTS.
- npm 11 o posterior.
- Docker Desktop con Docker Engine y Docker Compose activos.

## Estructura

```text
apps/
  web/       React, TypeScript y Vite
  api/       NestJS y Prisma
infra/
  docker/    PostgreSQL 18 mediante Docker Compose
docs/        Gestión documental y fuentes de referencia
```

## Variables de entorno

Copie `.env.example` como `.env` para desarrollo local y cambie la contraseña de ejemplo cuando corresponda. El archivo `.env` está ignorado por Git.

| Variable | Finalidad | Valor de ejemplo |
|---|---|---|
| `API_PORT` | Puerto de la API | `3000` |
| `WEB_PORT` | Puerto del servidor de desarrollo web | `5173` |
| `DATABASE_URL` | Conexión de Prisma a PostgreSQL | Véase `.env.example` |
| `POSTGRES_DB` | Nombre de la base local | `restgest_mateos` |
| `POSTGRES_USER` | Usuario local de PostgreSQL | `restgest` |
| `POSTGRES_PASSWORD` | Contraseña exclusiva de desarrollo | Véase `.env.example` |
| `POSTGRES_PORT` | Puerto de PostgreSQL publicado en el equipo | `5433` |

## Instalación

Desde la raíz:

```bash
npm install
npm run prisma:generate --workspace api
```

## PostgreSQL

El puerto local documentado es `5433`; dentro del contenedor PostgreSQL utiliza `5432`. Se evita así interferir con instalaciones locales que ya utilicen el puerto estándar.

```bash
docker compose --env-file .env -f infra/docker/compose.yaml up -d
docker compose --env-file .env -f infra/docker/compose.yaml ps
```

Si no se creó `.env`, Compose utiliza valores locales predeterminados equivalentes a `.env.example`.

Para detener el contenedor sin eliminar el volumen:

```bash
docker compose -f infra/docker/compose.yaml down
```

## Ejecución

Con PostgreSQL disponible, ejecute cada aplicación en una terminal desde la raíz:

```bash
npm run dev:api
npm run dev:web
```

- Web: `http://localhost:5173`
- Health API: `http://localhost:3000/api/health`
- Swagger: `http://localhost:3000/api/docs`

Durante desarrollo, Vite redirige `/api` hacia la API local. La pantalla inicial muestra si la API y PostgreSQL están disponibles.

## Calidad y pruebas

```bash
npm run build
npm run typecheck
npm run lint
npm run test
```

Las pruebas end-to-end de la API requieren PostgreSQL y `DATABASE_URL`:

```bash
npm run test:e2e --workspace api
```

## Prisma

Prisma está ubicado en `apps/api`. El esquema inicial solo configura PostgreSQL y no contiene entidades de negocio.

```bash
npm run prisma:generate --workspace api
npm run prisma:migrate --workspace api
```

No se debe crear un modelo funcional hasta que el alcance correspondiente esté validado.
