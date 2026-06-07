import { Hono } from "hono"
import api from "./routes/api"
import auth from "./routes/auth"
import queue from "./routes/queue"
import { logging } from "./middleware/logging"
import { errorHandler } from "./middleware/error"
import { requestId } from "./middleware/request-id"

const app = new Hono()

app.use("*", requestId)
app.use("*", logging)
app.use("*", errorHandler)

app.get("/health", (c) => c.json({ gateway: true }))

app.route("/api", api)
app.route("/auth", auth)
app.route("/queue", queue)

app.all("*", (c) => c.json({ error: "Route not found" }, 404))

export default app
