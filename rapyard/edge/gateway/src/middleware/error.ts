export const errorHandler = async (c, next) => {
  try {
    await next()
  } catch (err) {
    const reqId = c.get("reqId")
    console.error("Gateway Error", { reqId, err })
    return c.json({ error: "Internal Gateway Error", reqId }, 500)
  }
}
