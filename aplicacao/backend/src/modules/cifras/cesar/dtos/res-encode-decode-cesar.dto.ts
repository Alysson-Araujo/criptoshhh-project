import { IsString } from "class-validator";

export class ResEncodeDecodeCesarDto {
    @IsString()
    textoEncoderDecoder: string;
}