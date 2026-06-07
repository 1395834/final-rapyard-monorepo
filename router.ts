import { Hono } from 'hono'

const router = new Hono()

router.get('/', (c) => c.json({ message: 'RapYard API Router Online' }))

export default router
