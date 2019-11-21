import { Page1Dto } from './../dtos/page1.dto';
import { Controller, Post, Body } from '@nestjs/common';
import { Page1Service } from './page1.service';

@Controller('page1')
export class Page1Controller {
  constructor(private readonly page1Service: Page1Service) { }

  @Post()
  async createOrUpdate(@Body() page1Dto: Page1Dto): Promise<Page1Dto> {
    return await this.page1Service.createOrUpdate(page1Dto);
  }
}
