import UserRepository from '../repositories/user.js'

class UserController {
  async create(req, res) {
    try {
      const result = await UserRepository.create(req.body)
      return res.status(201).json(result)
    } catch (error) {
      return res.status(500).json({
        message: error.message
      })
    }
  }
}

export default new UserController()