import User from '../../database/schemas/user.js'

class UserRepository {
  create(payload) {
    try {
      return User.create(payload)
    } catch (error) {
      return error
    }
  }
}

export default new UserRepository()
