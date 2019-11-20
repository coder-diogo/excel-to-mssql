import { IsNotEmpty, IsString, IsDate } from 'class-validator';
export class Page1Dto {
  @IsNotEmpty()
  @IsString()
  Theme: string;
  @IsNotEmpty()
  @IsString()
  Area: string;
  @IsNotEmpty()
  @IsString()
  Data: string;
  @IsNotEmpty()
  @IsString()
  Objective: string;
  @IsNotEmpty()
  @IsString()
  Coord: string;
  @IsNotEmpty()
  @IsString()
  Scope: string;
  @IsNotEmpty()
  @IsString()
  OccurrenceDate: string;
  @IsNotEmpty()
  @IsString()
  ReportDate: string;
  @IsNotEmpty()
  @IsString()
  Norm: string;
  @IsNotEmpty()
  @IsString()
  CureentSituation: string;
  @IsNotEmpty()
  @IsString()
  FrequentOccurrences: string;
  @IsNotEmpty()
  @IsString()
  ProblemImpact: string;
  @IsNotEmpty()
  @IsString()
  OccurrenceLocationLine: string;
  @IsNotEmpty()
  @IsString()
  OccurrenceLocationWorkSpace: string;
  @IsNotEmpty()
  @IsString()
  OccurrenceLocationEquipment: string;
}
