import { Controller, Post, Body, BadRequestException } from "@nestjs/common";
import { SubstitutionCipherService } from "../services/substitution.service";
import { EncodeDecodeSubstitutionDto } from "../dtos/encode-decode-substitution.dto";

@Controller('substitution-cipher')
export class SubstitutionCipherController {
    constructor(private readonly substitutionCipherService: SubstitutionCipherService) {}

    @Post('encode')
    async encoder(@Body() body: EncodeDecodeSubstitutionDto) {
        if (!body.texto || !body.chave) {
            throw new BadRequestException("Texto e chave são obrigatórios");
        }
        return this.substitutionCipherService.cifrar(body.texto, body.chave);
    }

    @Post('decode')
    async decoder(@Body() body: EncodeDecodeSubstitutionDto) {
        if (!body.texto || !body.chave) {
            throw new BadRequestException("Texto e chave são obrigatórios");
        }
        return this.substitutionCipherService.descifrar(body.texto, body.chave);
    }
}
