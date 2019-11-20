import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Page1 {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    theme: string;
}
