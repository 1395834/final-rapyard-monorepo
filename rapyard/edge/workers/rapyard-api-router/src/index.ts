import { Hono } from "hono"

const app = new Hono()

app.get("/", (c) => c.json({ message: "RapYard API Router Worker Online" }))
app.get("/health", (c) => c.json({ ok: true }))

export default app
