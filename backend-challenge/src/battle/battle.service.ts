import { Battle } from './entities/battle.entity';
import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateBattleDto } from './dto/create-battle.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PokemonService } from 'src/pokemon/pokemon.service';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';

@Injectable()
export class BattleService {
  private readonly logger = new Logger('Battle service')

  constructor(
    @InjectRepository(Battle)
    private readonly battleRepository: Repository<Battle>,
    private readonly pokemonService: PokemonService,
  ) { }

  async create(createBattleDto: CreateBattleDto) {
    const pokemonOne = await this.pokemonService.findOne(createBattleDto.pokemonOne)

    const pokemonTwo = await this.pokemonService.findOne(createBattleDto.pokemonTwo)

    try {
      const [attacker, defender] = this.determineOrder(pokemonOne, pokemonTwo);

      const battleResults = this.simulateBattle(attacker, defender);

      const battle = this.battleRepository.create(battleResults);

      return await this.battleRepository.save(battle)
    } catch (error) {
      this.handleDBExceptions(error)
    }
  }

  findAll() {
    try {
      return this.battleRepository.find()
    } catch (error) {
      this.handleDBExceptions(error)
    }
  }

  private determineOrder(pokemon1: Pokemon, pokemon2: Pokemon): [Pokemon, Pokemon] {
    if (pokemon1.speed > pokemon2.speed) {
      return [pokemon1, pokemon2];
    } else if (pokemon2.speed > pokemon1.speed) {
      return [pokemon2, pokemon1];
    } else {
      return pokemon1.attack >= pokemon2.attack ? [pokemon1, pokemon2] : [pokemon2, pokemon1];
    }
  }

  private simulateBattle(attacker: Pokemon, defender: Pokemon) {
    let attackerHP = attacker.hp;
    let defenderHP = defender.hp;

    while (attackerHP > 0 && defenderHP > 0) {
      defenderHP -= this.calculateDamage(attacker.attack, defender.defense);

      if (defenderHP <= 0) return {
        winner: attacker,
        loser: defender
      };

      attackerHP -= this.calculateDamage(defender.attack, attacker.defense);
      if (attackerHP <= 0) return {
        winner: defender,
        loser: attacker
      }
    }
  }

  private calculateDamage(attack: number, defense: number): number {
    return Math.max(1, attack - defense);
  }

  private handleDBExceptions(error: any) {
    if (error.status === 400) {
      throw new BadRequestException(error.message)
    }
    if (error.code === '23505') {
      throw new BadRequestException(error.detail)
    }
    this.logger.error(error)
    throw new InternalServerErrorException(`Check logs!  error: ${error}`)
  }
}
