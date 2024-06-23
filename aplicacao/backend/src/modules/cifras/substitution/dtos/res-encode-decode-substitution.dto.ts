import { IsString } from "class-validator";

export class ResEncodeDecodeSubstitutionDto {
    @IsString()
    textoEncoderDecoder: string;
}