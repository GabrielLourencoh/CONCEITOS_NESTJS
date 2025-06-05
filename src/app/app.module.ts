// Carrega a aplicação inteira
// Serve também para encapsular coisas
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConceitosManualModule } from 'src/conceitos-manual/conceitos-manual.module';
import { ConceitosAutomaticoModule } from 'src/conceitos-automatico/conceitos-automatico.module';

@Module({
  imports: [ConceitosManualModule, ConceitosAutomaticoModule], // Importação de outros modulos
  controllers: [AppController],
  providers: [AppService], // Injeção de Dependencias
  exports: [], // Do modulo raiz tambem podemos exportar 
})
export class AppModule {}
