import { Page1 } from './page1.entity';
import createMockInstance from 'jest-create-mock-instance';
import { Test, TestingModule } from '@nestjs/testing';
import { Page1Service } from './page1.service';
import { Page1Repository } from './page1.repository';
import { Page1Controller } from './page1.controller';
import { NotFoundException } from '@nestjs/common';

const mockPage1Repository = () => ({
  create: jest.fn(),
  findOne: jest.fn(),
  merge: jest.fn(),
  find: jest.fn(),
});

describe('Page1 Controller', () => {
  let page1Service: Page1Service;
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
  const otherPage1Dto: any = {
    Theme: 'b12',
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
      providers: [
        Page1Service,
        { provide: Page1Repository, useFactory: mockPage1Repository },
      ],
    }).compile();
    page1Repository = module.get<Page1Repository>(Page1Repository);

    page1Service = module.get<Page1Service>(Page1Service);
    mockPage1 = createMockInstance(Page1);
  });

  describe('Page1 Service', () => {
    describe('Create Or Update', () => {
      it('should be created', async () => {
        page1Repository.findOne.mockResolvedValue();
        mockPage1.save.mockResolvedValue(page1Dto);
        page1Repository.create.mockReturnValue(mockPage1);
        await expect(await page1Service.createOrUpdate(page1Dto)).toBe(
          page1Dto,
        );
      });

      it('should be Updated', async () => {
        page1Repository.findOne.mockResolvedValue(page1Dto);
        mockPage1.save.mockResolvedValue(page1Dto);
        page1Repository.merge.mockReturnValue(mockPage1);
        expect(await page1Service.createOrUpdate(page1Dto)).toBe(page1Dto);
      });
    });
    describe('Get Next Entry', () => {
      it('should get next Entry', async () => {
        page1Repository.findOne.mockResolvedValue(page1Dto);
        page1Repository.find.mockResolvedValue([otherPage1Dto]);
        expect(await page1Service.getNextEntry(page1Dto)).toBe(otherPage1Dto);
      });

      it('should throw error current entry not found', async () => {
        page1Repository.findOne.mockResolvedValue(undefined);
        await expect(page1Service.getNextEntry(page1Dto)).rejects.toThrowError(NotFoundException);
      });

      it('should throw error No entry available', async () => {
        page1Repository.findOne.mockResolvedValue(page1Dto);
        page1Repository.find.mockResolvedValue([]);
        await expect(page1Service.getNextEntry(page1Dto)).rejects.toThrowError(NotFoundException);
      });
    });
    describe('Get Previous Entry', () => {
      it('should get previous entry', async () => {
        page1Repository.findOne.mockResolvedValue(page1Dto);
        page1Repository.find.mockResolvedValue([otherPage1Dto]);
        expect(await page1Service.getPreviousEntry(page1Dto)).toBe(otherPage1Dto);
      });
    });
  });
});
