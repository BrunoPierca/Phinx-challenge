import { Module } from '@nestjs/common';
import { BattleService } from './battle.service';
import { BattleController } from './battle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Battle } from './entities/battle.entity';
import { PokemonModule } from 'src/pokemon/pokemon.module';

@Module({
  controllers: [BattleController],
  providers: [BattleService],
  imports: [TypeOrmModule.forFeature([Battle]), PokemonModule],
})
export class BattleModule { }
