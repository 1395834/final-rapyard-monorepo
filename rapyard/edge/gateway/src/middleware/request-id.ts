import { nanoid } from "nanoid"

export const requestId = async (c, next) => {
  const id = nanoid()
  c.set("reqId", id)
  c.res.headers.set("x-request-id", id)
  await next()
}
