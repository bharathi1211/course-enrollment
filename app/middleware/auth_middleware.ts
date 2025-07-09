import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class AuthMiddleware {
  async handle({ request, response }: HttpContext, next: NextFn) {
    console.log('AuthMiddleware: Checking API key...')
    const clientKey = request.header('Admin')
    const validKey = "1234"
    if (!clientKey || clientKey !== validKey) {
      return response.unauthorized({ error: 'Invalid or missing API key' })
    }
    console.log('AuthMiddleware: API key is valid, proceeding to next middleware or route handler...')
    return next();
}
}