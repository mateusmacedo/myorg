import { UsersModule } from './app/users.module'
import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

async function bootstrap() {
  const app = await NestFactory.create(UsersModule)
  const globalPrefix = 'api'
  app.setGlobalPrefix(globalPrefix)
  const port = process.env.PORT || 3333
  await app.listen(port)
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`)
}

bootstrap()
