import { Injectable, BadRequestException } from "@nestjs/common";

@Injectable()
export class SubstitutionCipherService {
    
    private static ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    private validateKey(key: string): void {
        if (!key) {
            throw new BadRequestException("A chave não pode ser vazia");
        }
        if (key.length !== SubstitutionCipherService.ALPHABET.length) {
            throw new BadRequestException("A chave deve ter 26 caracteres");
        }
        if (new Set(key).size !== SubstitutionCipherService.ALPHABET.length) {
            throw new BadRequestException("A chave deve conter 26 caracteres únicos");
        }
    }

    private transform(text: string, key: string, isEncrypt: boolean): string {
        this.validateKey(key);
        const upperText = text.toUpperCase();
        const upperKey = key.toUpperCase();
        const alphabet = SubstitutionCipherService.ALPHABET;
        let result = '';

        for (const char of upperText) {
            if (alphabet.includes(char)) {
                const index = isEncrypt ? alphabet.indexOf(char) : upperKey.indexOf(char);
                result += isEncrypt ? upperKey[index] : alphabet[index];
            } else {
                result += char;
            }
        }

        return result;
    }

    async cifrar(texto: string, chave: string): Promise<string> {
        return this.transform(texto, chave, true);
    }

    async descifrar(texto: string, chave: string): Promise<string> {
        return this.transform(texto, chave, false);
    }
}
