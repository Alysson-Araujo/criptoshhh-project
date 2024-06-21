import { Body, Controller, Post } from '@nestjs/common';
import { EncodeDecodeCesarDto } from '../dtos/encode-decode-cesar.dto';
import { CesarService } from '../services/cesar.service';

@Controller('cesar')
export class CesarController {
  constructor(private cesarService: CesarService) {}

  @Post('encode')
  async encode(@Body() body: EncodeDecodeCesarDto) {
    return await this.cesarService.cifrar(body.texto, body.desplazamiento);
  }

  @Post('decode')
  async decode(@Body() body: EncodeDecodeCesarDto) {
    return await this.cesarService.descifrar(body.texto, body.desplazamiento);
  }
}