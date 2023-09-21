import express, { Express } from 'express'
import * as dotenv from 'dotenv'
import { morganMiddleware } from './middleware'
import Logger from './lib/logger'
dotenv.config()

const app: Express = express()

//Middlewares
app.use(express.json({ limit: '10mb' }),morganMiddleware)
app.disable('x-powered-by')
//Middlewares


const port = process.env.PORT || 3000

app.get('/api/v1/test', (_, res) => {
    Logger.error('This is an error log')
    Logger.warn('This is a warn log')
    Logger.info('This is a info log')
    Logger.http('This is a http log')
    Logger.debug('This is a debug log')
    res.send('Hello world')
  })
app.listen(port,()=>{
    Logger.info("Server is running on port 3000")
})