import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp } from 'typeorm';

@Entity()
export class Page1 extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    Theme: string;

    @Column()
    Area: string;

    @Column()
    Data: string;

    @Column()
    Objective: string;

    @Column()
    Coord: string;

    @Column()
    Scope: string;

    @Column()
    OccurrenceDate: string;

    @Column()
    ReportDate: string;

    @Column()
    Norm: string;

    @Column()
    CureentSituation: string;

    @Column()
    FrequentOccurrences: string;

    @Column()
    ProblemImpact: string;

    @Column()
    OccurrenceLocationLine: string;

    @Column()
    OccurrenceLocationWorkSpace: string;

    @Column()
    OccurrenceLocationEquipment: string;

    @Column()
    UpdatedAt: Date;

    @Column()
    CreateAt: Date;
}
