import express from 'express';
import dotenv from 'dotenv';
import router from './routes'
import './database'

dotenv.config()

const app = express();

const PORT = process.env.PORT || 3333

app.use(router)

app.listen(PORT, () => console.log('\n > Express running'))