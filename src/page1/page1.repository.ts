import { Page1 } from './page1.entity';
import { EntityRepository, Repository } from 'typeorm';
import { Page1Dto } from '../dtos/page1.dto';

@EntityRepository(Page1)
export class Page1Repository extends Repository<Page1> {
}
