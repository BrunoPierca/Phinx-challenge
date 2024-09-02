import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [SeedService],
  imports: [TypeOrmModule.forFeature([Pokemon])],
  exports: [SeedService]
})
export class SeedModule { }
