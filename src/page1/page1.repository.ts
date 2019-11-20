import { Page1 } from './page1.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository()
export class Page1Repository extends Repository<Page1> {
    findByName(clientName: string) {
        return this.findOne({ where: {clientName} });
    }
}
