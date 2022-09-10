import express, { Router } from 'express'

import './database/connection.js'
import * as router from './routes/index.js'

class App {
  constructor () {
    this.server = express()
    this.middlewares()
  }

  middlewares() {
    this.server.use(express.json())
  }

  routes() {
    router(this.server)
  }
}

const app = new App().server
export default app