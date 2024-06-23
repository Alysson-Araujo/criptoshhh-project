import { IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class EncodeDecodeSubstitutionDto {
  @IsString()
  @MinLength(1)
  @MaxLength(500)
  readonly texto: string;

  @IsNumber()
  readonly chave: string;
}
