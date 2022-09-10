import express from 'express'

import './database/connection.js'

class App {
  constructor () {
    this.server = express()
    this.middlewares()
  }

  middlewares() {
    this.server.use(express.json())
  }
}

const app = new App().server
export default app