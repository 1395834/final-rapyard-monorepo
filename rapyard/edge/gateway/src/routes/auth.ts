import { Hono } from "hono"

const auth = new Hono()

auth.get("/", (c) => c.json({ message: "Auth service not implemented yet" }))

export default auth
