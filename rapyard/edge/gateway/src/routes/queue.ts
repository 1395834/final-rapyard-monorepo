import { Hono } from "hono"

const queue = new Hono()

queue.get("/", (c) => c.json({ message: "Queue service not implemented yet" }))

export default queue
