import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CesarController } from './modules/cifras/cesar/controllers/cesar.controller';
import { CesarService } from './modules/cifras/cesar/services/cesar.service';
import { VigenereController } from './modules/cifras/vigenere/controllers/vigenere.controller';
import { VigenereService } from './modules/cifras/vigenere/services/vigenere.service';
import { SubstitutionCipherController } from './modules/cifras/substitution/controllers/substitution.controller';
import { SubstitutionCipherService } from './modules/cifras/substitution/services/substitution.service';

@Module({
  imports: [],
  controllers: [AppController, CesarController, VigenereController, SubstitutionCipherController],
  providers: [AppService, CesarService, VigenereService, SubstitutionCipherService],
})
export class AppModule {}
