import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

// Podemos trocar o nome dessa função para qualquer coisa
async function bootstrap() {
  const app = await NestFactory.create(AppModule); // Iniciando uma aplicação Nest e usado para carregar as outras coisas da aplicação no codigo raiz
  await app.listen(process.env.PORT ?? 3000); // Definindo a porta do servidor
}
bootstrap();
