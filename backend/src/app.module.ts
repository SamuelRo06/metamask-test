/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NftsModule } from './modules/nfts/nfts.module';

@Module({
  imports: [NftsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
