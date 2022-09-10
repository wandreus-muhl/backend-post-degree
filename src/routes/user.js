import UserController from '../app/controllers/user.js'

export default (server, routes, prefix = '/user') => {
  routes.post('create', UserController.create)

  server.use(prefix, routes)
}