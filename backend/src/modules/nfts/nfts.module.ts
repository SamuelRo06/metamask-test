/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { NftsService } from './nfts.service';
import { NftsController } from './nfts.controller';

@Module({
  providers: [NftsService],
  controllers: [NftsController],
  exports: [NftsService],
  imports: [],
})
export class NftsModule {}