import { Router } from 'express'
import PrivateKey from './controllers/PrivateKey'

const app = Router()

app.post('/api/login', PrivateKey.login)
app.post('/api/create-user', PrivateKey.create)

export default app