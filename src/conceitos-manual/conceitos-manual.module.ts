import { Module } from "@nestjs/common"; // Import para usar o Module
import { ConceitosManualController } from "./conceitos-manual.controller";

// Criando o nosso modulo
// Precisamos no app..module importar todas as modules criadas manualmente
@Module({
    controllers: [ConceitosManualController],
})
export class ConceitosManualModule {}