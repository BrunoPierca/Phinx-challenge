import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { timeOutInterceptor } from './config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);


  app.useGlobalInterceptors(new timeOutInterceptor())

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );


  app.enableCors()


  //Swagger
  const options = new DocumentBuilder()
    .setTitle('PokeChallenge API')
    .setDescription('Backend challenge for Phinx Labs. \n\n This app accomplishes or provides:  \n 1. DB migration populating a table with provided Pokemon data.  \n 2. A endpoint to list all pokemon.  \n 3. A endpoint to make them battle against each other.  \n 4. Saves battle results on a table.')
    .setVersion('1.0.0')
    .build()

  const document = SwaggerModule.createDocument(app, options)

  SwaggerModule.setup('/docs', app, document, {
    swaggerOptions: {
      customSiteTitle: 'Phinx challenge API Docs',
    }
  })

  await app.listen(configService.get("PORT") ?? 5000);
  console.log(`App running on port ${configService.get("PORT") ?? 5000}`);
}
bootstrap();
