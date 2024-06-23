import { Injectable } from "@nestjs/common";

@Injectable()
export class VigenereService {
    
    private generateKey(message: string, key: string): string {
        key = key.toUpperCase();
        return key.repeat(Math.ceil(message.length / key.length)).substring(0, message.length);
    }

    private shiftChar(char: string, shift: number, decrypt: boolean = false): string {
        const base = 'A'.charCodeAt(0);
        const offset = char.charCodeAt(0) - base;
        const shiftValue = decrypt ? (26 - shift) : shift;
        return String.fromCharCode(base + (offset + shiftValue) % 26);
    }

    private process(message: string, key: string, decrypt: boolean = false): string {
        const upperMessage = message.toUpperCase();
        const generatedKey = this.generateKey(upperMessage, key);
        return upperMessage.split('').map((char, i) => {
            if (/[A-Z]/.test(char)) {
                const shift = generatedKey[i].charCodeAt(0) - 'A'.charCodeAt(0);
                return this.shiftChar(char, shift, decrypt);
            } else {
                return char;
            }
        }).join('');
    }

    async cifrar(texto: string, chave: string): Promise<string> {
        return this.process(texto, chave);
    }

    async descifrar(texto: string, chave: string): Promise<string> {
        return this.process(texto, chave, true);
    }
}
