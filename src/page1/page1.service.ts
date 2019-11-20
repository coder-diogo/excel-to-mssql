import { Page1 } from './page1.entity';
import { Page1Dto } from './../dtos/page1.dto';
import { Page1Repository } from './page1.repository';
import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class Page1Service {
  constructor(
    @InjectRepository(Page1Repository)
    private page1Repository: Page1Repository,
  ) { }

  async import(page1dto: Page1Dto): Promise<Page1Dto> {
    return await this.page1Repository.createPage1(page1dto);
  }
}
