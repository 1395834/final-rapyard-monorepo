import { Hono } from "hono"

const api = new Hono()

api.all("/*", async (c) => {
  const url = new URL(c.req.url)
  const req = new Request(url.toString(), c.req.raw)
  const svc = c.env["rapyard-api-router"] as Fetcher
  const res = await svc.fetch(req)
  return res
})

export default api
