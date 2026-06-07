export const logging = async (c, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start

  const reqId = c.get("reqId")

  console.log(
    JSON.stringify({
      reqId,
      path: c.req.path,
      method: c.req.method,
      status: c.res.status,
      duration_ms: ms
    })
  )
}
