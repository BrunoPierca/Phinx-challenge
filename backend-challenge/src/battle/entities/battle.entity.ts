import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';

@Entity()
export class Battle {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Pokemon)
    winner: Pokemon;

    @ManyToOne(() => Pokemon)
    loser: Pokemon;

    @CreateDateColumn()
    date: Date;
}