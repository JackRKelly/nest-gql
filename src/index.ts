import { NestFactory } from "@nestjs/core";
import { AppModule } from "@modules/app.module";
import { env } from "@lib/env";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(env.Port);
}

bootstrap();
