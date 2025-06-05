// Carrega a aplicação inteira
// Serve também para encapsular coisas
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [], // Importação de outros modulos
  controllers: [AppController],
  providers: [AppService], // Injeção de Dependencias
  exports: [], // Do modulo raiz tambem podemos exportar 
})
export class AppModule {}
