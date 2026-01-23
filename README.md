# husky-website
 Website for husky Devs

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Este proyecto puede ejecutarse con **Bun**.

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
bun install
bun run dev
```

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
bun run build
```

Puedes levantar el build de producción con:

```bash
bun run preview
```

## Docker (producción)

Este proyecto expone un endpoint para quejas/bounces en `/bounces` (GET/POST) que responde `200` con el texto `su suscripcion ha cesado`.

### Levantar con Docker Compose

```bash
docker compose -f docker-compose.prod.yml up --build -d
```

Queda escuchando en `http://localhost:3000`.

### Probar el endpoint

```bash
curl -i http://localhost:3000/bounces
curl -i -X POST http://localhost:3000/bounces
```

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
