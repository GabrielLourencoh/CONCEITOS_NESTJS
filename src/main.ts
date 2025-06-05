import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Podemos trocar o nome dessa função para qualquer coisa
async function inicia() {
  const aplicativo = await NestFactory.create(AppModule); // Iniciando uma aplicação Nest e usado para carregar as outras coisas da aplicação no codigo raiz
  await aplicativo.listen(process.env.PORT ?? 3000);
}
inicia();
