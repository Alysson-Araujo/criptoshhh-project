import { Injectable } from '@nestjs/common';

@Injectable()
export class CesarService {
  async cifrar(texto: string, desplazamiento: number): Promise<string> {
    return texto
      .split('')
      .map((letra) => {
        const codigo = letra.charCodeAt(0);
        if (codigo >= 65 && codigo <= 90) {
          return String.fromCharCode(
            ((codigo - 65 + desplazamiento) % 26) + 65,
          );
        } else if (codigo >= 97 && codigo <= 122) {
          return String.fromCharCode(
            ((codigo - 97 + desplazamiento) % 26) + 97,
          );
        } else {
          return letra;
        }
      })
      .join('');
  }

  async descifrar(texto: string, desplazamiento: number): Promise<string> {
    return await this.cifrar(texto, 26 - desplazamiento);
  }
}
