import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './swagger/swagger'



async function bootstrap() {


 
  
  // const options = new DocumentBuilder()
  //   .setTitle("Swagger application")
  //   .setDescription("Practice apis")
  //   .setVersion("1.0")
  //   .addBearerAuth({
  //     type : "http",
  //     scheme : "bearer",
  //     bearerFormat : "JWT",
  //     name : "JWT",
  //     description : "Enter JWT token",
  //     in : "header"
  //   },"JWT-auth")
  //   .build()
    

  const app = await NestFactory.create(AppModule);
  setupSwagger(app);
  await app.listen(3000);

  // const document = SwaggerModule.createDocument(app, options,)
  // SwaggerModule.setup("api", app, document)
  // await app.listen(3000);
}
bootstrap();


