import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';
import {  Repository } from 'typeorm';

@Injectable()
export class PokemonService {

  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
  ) { }

  private readonly logger = new Logger('Pokemon service')

  findAll() {
    try {
      return this.pokemonRepository.find()
    } catch (error) {
      this.handleDBExceptions(error)
    }
  }

  async findOne(id: string) {
    let pokemon: Pokemon
    pokemon = await this.pokemonRepository.findOneBy({ id })
    if (!pokemon) throw new NotFoundException(`Couldn't find Pokemon with ID: ${id}`)
    return pokemon;
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
