/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { NftsService } from './nfts.service';
@Controller('nfts')
export class NftsController {

  constructor(
    private readonly nftsService: NftsService,
  ){
    
  }

  @Get()
  async getNfts(): Promise<any> {
    return this.nftsService.findNftsByCollection()
  }
}
