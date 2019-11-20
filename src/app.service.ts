import { Injectable } from '@nestjs/common';
import { Page1Dto } from './dtos/page1.dto';

@Injectable()
export class AppService {
  async page1Import(page1dto: Page1Dto): Promise<Page1Dto> {
    return page1dto;
  }
}
git initgit init