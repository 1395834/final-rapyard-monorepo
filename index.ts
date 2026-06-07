import { Hono } from 'hono'
import router from './router'

const app = new Hono()

app.route('/', router)

app.get('/health', (c) => c.json({ ok: true }))

app.fire()
