import { Page1Dto } from './../dtos/page1.dto';
import { Test, TestingModule } from '@nestjs/testing';
import { Page1Controller } from './page1.controller';
import { Page1Service } from './page1.service';

describe('Page1 Controller', () => {
  let controller: Page1Controller;
  const page1Dto: Page1Dto = {
    Theme: 'a1',
    Area: 'Operações',
    Data: '02/02/2019',
    Objective: 'a2',
    Coord: 'a3',
    Scope: 'Segurança',
    OccurrenceDate: '02/02/2019',
    ReportDate: '02/02/2019',
    Norm: 'a4',
    CureentSituation: 'a5',
    FrequentOccurrences: 'a6',
    ProblemImpact: 'a7',
    OccurrenceLocationLine: 'MC1',
    OccurrenceLocationWorkSpace: 'a8',
    OccurrenceLocationEquipment: 'a9',
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Page1Controller],
      providers: [Page1Service],
    }).compile();

    controller = module.get<Page1Controller>(Page1Controller);
  });

  it('should be page1Dto', async () => {
    expect(await controller.import(page1Dto)).toBe(page1Dto);
  });
});
