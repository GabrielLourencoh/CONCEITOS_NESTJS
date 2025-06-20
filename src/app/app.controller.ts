// Controla a request e response
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


// Podemos informar um recurso tanto no controlador e tanto no recurso, entao, colocamos assim na url
@Controller('home') // é o /home do site
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Método da solicitação do http -> Ler (Read) 
  // /home/hello
  @Get('hello') // Isso é um recurso da solicitação, método
  getHello(): string {
    const retorno: string = "Estou retornando algo!";
    return retorno;
  }

  @Get('exemplo')
  exemplo(): string {
    return this.appService.solucionaExemplo(); // Aqui pegamos o metodo criao no AppService e retornamos passando o parametro this.
  }
}
