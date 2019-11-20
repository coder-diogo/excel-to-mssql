import { Controller, Get, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Page1Dto } from './dtos/page1.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async page1Import(@Body() page1Dto: Page1Dto): Promise<Page1Dto> {
    return await this.appService.page1Import(page1Dto);
  }
}
