import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import jwt from 'jsonwebtoken'
import Env from '@ioc:Adonis/Core/Env'
import User from '../models/User'

export default class AuthController {
  public async login({ request, response }: HttpContextContract) {
    const { username, password } = request.only(['username', 'password'])

    const user = await User.query().where('username', username).first()

    if (!user || user.password !== password) {
      return response.unauthorized({ message: 'Invalid credentials' })
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      Env.get('JWT_SECRET'),
      { expiresIn: Env.get('JWT_EXPIRES_IN') }
    )

    return response.ok({
      token,
      message: 'Login successful',
    })
  }
}
