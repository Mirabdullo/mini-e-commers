import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import * as dotenv from 'dotenv'
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const PORT = process.env.PORT

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())


  const config = new DocumentBuilder()
  .setTitle('RentEquipment')
  .setDescription('Rest Api')
  .setVersion('1.0.0')
  .addTag('NodeJs, NestJs, Postgres, Sequalize')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs/rentEquipment', app, document);

  await app.listen(PORT, () => {
    console.log(`Server ${PORT}-portda ishga tushdi`);
  });
}
bootstrap();
