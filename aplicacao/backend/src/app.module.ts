import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CesarController } from './modules/cifras/cesar/controllers/cesar.controller';
import { CesarService } from './modules/cifras/cesar/services/cesar.service';
import { VigenereController } from './modules/cifras/vigenere/controllers/vigenere.controller';
import { VigenereService } from './modules/cifras/vigenere/services/vigenere.service';

@Module({
  imports: [],
  controllers: [AppController, CesarController, VigenereController],
  providers: [AppService, CesarService, VigenereService],
})
export class AppModule {}
