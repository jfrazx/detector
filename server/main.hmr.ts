import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

declare const module: any;

const port = process.env.PORT || 8000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port, () =>
    console.log(`Express server listening on port ${port}`)
  );

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
