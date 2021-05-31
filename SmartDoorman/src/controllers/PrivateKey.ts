import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { User } from '../entities/User'

export default {
  async login(req: Request, res: Response) {
    const { privateKey } = req.body

    const userRepository = getRepository(User)

    const userAlreadyCreated = await userRepository.findOne({
      privateKey
    })

    return res.json(userAlreadyCreated)
  },

  async create(req: Request, res: Response) {
    const { email, privateKey } = req.body

    const userRepository = getRepository(User)

    const newUser = new User()

    newUser.email = email
    newUser.privateKey = privateKey

    const savedUser = await userRepository.save(newUser)

    return res.json({ savedUser })
  }
}