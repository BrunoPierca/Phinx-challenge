import { Controller, Get } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Pokemon')
@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) { }

  @Get()
  findAll() {
    return this.pokemonService.findAll();
  }

}
