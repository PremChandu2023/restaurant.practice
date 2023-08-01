import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';
import * as yaml from 'js-yaml';
import * as fs from 'fs';
import * as path from 'path';

export function setupSwagger(app: INestApplication): void {

    
    const ymlpath =  path.join(__dirname,  'swagger.yml')
    const openApiYml =fs.readFileSync(ymlpath, 'utf8');
  const swaggerDocument = yaml.load(openApiYml);

  const options = new DocumentBuilder()
    .setTitle('chandu')
    .setDescription('Your API Description')
    .setVersion('1.0')
    .addServer('http://localhost:3000') 
    .build();

  const document = SwaggerModule.createDocument(app, options, swaggerDocument);
  SwaggerModule.setup('api1', app, document);
}
