import { Page1 } from './page1.entity';
import { EntityRepository, Repository } from 'typeorm';
import { Page1Dto } from '../dtos/page1.dto';

@EntityRepository(Page1)
export class Page1Repository extends Repository<Page1> {
    async createPage1(page1Dto: Page1Dto): Promise<Page1> {

        const {
            Area,
            Coord,
            Data,
            FrequentOccurrences,
            Norm,
            Objective,
            OccurrenceLocationEquipment,
            OccurrenceDate,
            OccurrenceLocationLine,
            OccurrenceLocationWorkSpace,
            ProblemImpact,
            ReportDate,
            Theme,
            Scope,
            CureentSituation,
        } = page1Dto;

        let page1: Page1 = await this.findOne({ Theme });

        if (!page1) {
            page1 = new Page1();
            page1.CreateAt = new Date()
        }

        page1.Area = Area;
        page1.Coord = Coord;
        page1.CureentSituation = CureentSituation;
        page1.Data = Data;
        page1.FrequentOccurrences = FrequentOccurrences;
        page1.Norm = Norm;
        page1.Objective = Objective;
        page1.OccurrenceDate = OccurrenceDate;
        page1.OccurrenceLocationEquipment = OccurrenceLocationEquipment;
        page1.OccurrenceLocationLine = OccurrenceLocationLine;
        page1.OccurrenceLocationWorkSpace = OccurrenceLocationWorkSpace;
        page1.ProblemImpact = ProblemImpact;
        page1.ReportDate = ReportDate;
        page1.Scope = Scope;
        page1.Theme = Theme;
        page1.UpdatedAt = new Date();

        return page1.save();
    }
}
