import type { HttpContext } from '@adonisjs/core/http'
import jwt, { Secret, SignOptions } from 'jsonwebtoken'
import User from '../models/users.js'

export default class AuthController {
  public async login({ request, response }: HttpContext) {
    const { username, password } = request.only(['username', 'password'])

    const user = await User.query().where('username', username).first()

    if (!user || user.password !== password) {
      return response.unauthorized({ message: 'Invalid credentials' })
    }

    const secret: Secret = process.env.JWT_SECRET || 'fallback_secret'

    const token = jwt.sign(
      { id: user.id, username: user.username },
      secret
    )

    return response.ok({
      token,
      message: 'Login successful',
    })
  }
}
