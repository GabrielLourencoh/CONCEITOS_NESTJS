import { Module } from "@nestjs/common"; // Import para usar o Module
import { ConceitosManualController } from "./conceitos-manual.controller";
import { ConceitosManualService } from "./conceitos-manual.service";

// Criando o nosso modulo
// Precisamos no app..module importar todas as modules criadas manualmente
@Module({
    controllers: [ConceitosManualController],
    providers: [ConceitosManualService]
})
export class ConceitosManualModule {}