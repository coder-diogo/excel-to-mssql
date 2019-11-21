import { Page1 } from './page1.entity';
import { Page1Dto } from './../dtos/page1.dto';
import { Page1Repository } from './page1.repository';
import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Page1CreateDto } from '../dtos/page1-create.dto';

@Injectable()
export class Page1Service {
  constructor(
    @InjectRepository(Page1Repository)
    private page1Repository: Page1Repository,
  ) { }

  async createOrUpdate(page1dto: Page1Dto): Promise<Page1Dto> {
    const page1: Page1 = await this.page1Repository.findOne({ Theme: page1dto.Theme });

    if (!page1) {

      const page1Data: Page1CreateDto = { ...page1dto, CreatedAt: new Date(), UpdatedAt: new Date() };
      const page1Create: Page1 = this.page1Repository.create(page1Data);

      return await page1Create.save();

    } else {

      const page1Merged: Page1 = this.page1Repository.merge(page1, page1dto);
      return await page1Merged.save();

    }
  }
}
