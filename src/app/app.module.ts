// Carrega a aplicação inteira
// Serve também para encapsular coisas
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConceitosManualModule } from 'src/conceitos_manual/conceitos-manual.module';

@Module({
  imports: [ConceitosManualModule], // Importação de outros modulos
  controllers: [AppController],
  providers: [AppService], // Injeção de Dependencias
  exports: [], // Do modulo raiz tambem podemos exportar 
})
export class AppModule {}
