import { Injectable } from '@nestjs/common';
import { Page1Dto } from 'src/dtos/page1.dto';

@Injectable()
export class Page1Service {

    async page1Import(page1dto: Page1Dto): Promise<Page1Dto> {
        return page1dto;
      }
}
