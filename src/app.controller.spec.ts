import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Page1Dto } from './dtos/page1.dto';

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

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return  an instance of page1Dto', async () => {
      expect(await appController.page1Import(page1Dto)).toBe(page1Dto);
    });
  });
});
