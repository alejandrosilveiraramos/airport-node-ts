import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('airport')
export class Airport {
    @PrimaryGeneratedColumn()
    codeAirport: number;

    @Column({type: 'varchar2', nullable: false})
    nameAirport: string;

    @Column({type: 'varchar2', nullable: false})
    addressAirport: string;
    
}