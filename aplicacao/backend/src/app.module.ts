import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CesarController } from './modules/cifras/cesar/controllers/cesar.controller';
import { CesarService } from './modules/cifras/cesar/services/cesar.service';

@Module({
  imports: [],
  controllers: [AppController, CesarController],
  providers: [AppService, CesarService],
})
export class AppModule {}
