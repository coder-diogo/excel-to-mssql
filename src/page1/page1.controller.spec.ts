import { Page1 } from './page1.entity';
import createMockInstance from 'jest-create-mock-instance';
import { Test, TestingModule } from '@nestjs/testing';
import { Page1Service } from './page1.service';
import { Page1Repository } from './page1.repository';
import { Page1Controller } from './page1.controller';

const mockPage1Repository = () => ({
  create: jest.fn(),
  findOne: jest.fn(),
  merge: jest.fn(),
});

describe('Page1 Controller', () => {
  let page1Controller: Page1Controller;
  let page1Repository: any;
  let mockPage1: jest.Mocked<Page1>;
  const page1Dto: any = {
    Theme: 'a12',
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
      providers: [
        Page1Service,
        { provide: Page1Repository, useFactory: mockPage1Repository },
      ],
    }).compile();
    page1Repository = module.get<Page1Repository>(Page1Repository);
    page1Controller = module.get<Page1Controller>(Page1Controller);

    mockPage1 = createMockInstance(Page1);
  });

  describe('Page1 Service', () => {
    describe('Page1 Repository', () => {
      it('should be created', async () => {
        page1Repository.findOne.mockResolvedValue();
        mockPage1.save.mockResolvedValue(page1Dto);
        page1Repository.create.mockReturnValue(mockPage1);
        expect(await page1Controller.createOrUpdate(page1Dto)).toBe(page1Dto);
      });

      it('should be Updated', async () => {
        page1Repository.findOne.mockResolvedValue(page1Dto);
        mockPage1.save.mockResolvedValue(page1Dto);
        page1Repository.merge.mockReturnValue(mockPage1);
        expect(await page1Controller.createOrUpdate(page1Dto)).toBe(page1Dto);
      });
    });
  });
});
