import { NestFactory } from '@nestjs/core';
import { winstonLogger } from '../common/logger/winston.util';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true, logger: winstonLogger
  });
  await app.listen(3000);
}
bootstrap();
