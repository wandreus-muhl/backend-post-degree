import {Router} from 'express'

import * as UserRoutes from './user.js'

export default server => {
  server.use((req, res, next) => {
    UserRoutes(server, new Router())
    next()
  })
}