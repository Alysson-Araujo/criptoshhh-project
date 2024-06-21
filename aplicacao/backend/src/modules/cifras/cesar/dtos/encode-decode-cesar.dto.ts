import { IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class EncodeDecodeCesarDto {
  @IsString()
  @MinLength(1)
  @MaxLength(500)
  readonly texto: string;

  @IsNumber()
  readonly desplazamiento: number;
}
