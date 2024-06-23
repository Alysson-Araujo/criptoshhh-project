import { IsString } from "class-validator";

export class ResEncodeDecodeVigenereDto {
    @IsString()
    textoEncoderDecoder: string;
}