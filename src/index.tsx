// index.tsx
import { Hono } from "hono"
import { serveStatic } from '@hono/node-server/serve-static'
import { Home } from "./content/home"
const app = new Hono()

app.use('/src/static/*', serveStatic({ root: './' }))
app.get('/', (c) => c.html(<Home />))

export default app