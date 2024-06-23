import { Controller, Post, Body } from "@nestjs/common";
import { VigenereService } from "../services/vigenere.service";
import { EncodeDecodeVigenereDto } from "../dtos/encode-decode-vigenere.dto";

@Controller('vigenere')
export class VigenereController {
    constructor(private readonly vigenereService: VigenereService) {}

    @Post('encode')
    async encoder(@Body() body: EncodeDecodeVigenereDto) {
        return this.vigenereService.cifrar(body.texto, body.chave);
    }

    @Post('decode')
    async decoder(@Body() body: EncodeDecodeVigenereDto) {
        return this.vigenereService.descifrar(body.texto, body.chave);
    }
}
