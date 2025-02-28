import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Pokemon } from "src/pokemon/entities/pokemon.entity";
import { Repository } from "typeorm";

@Injectable()
export class SeedService {
    constructor(
        @InjectRepository(Pokemon)
        private pokemonRepository: Repository<Pokemon>
    ) { }

    async seed() {
        console.log("Running seed...");
        const pokemon = [
            {
                "id": "pokemon-1",
                "name": "Pikachu",
                "attack": 4,
                "defense": 3,
                "hp": 3,
                "speed": 6,
                "type": "Type",
                "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png"
            },
            {
                "id": "pokemon-2",
                "name": "Charmander",
                "attack": 4,
                "defense": 3,
                "hp": 3,
                "speed": 4,
                "type": "Type",
                "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png"
            },
            {
                "id": "pokemon-3",
                "name": "Squirtle",
                "attack": 3,
                "defense": 4,
                "hp": 3,
                "speed": 3,
                "type": "Type",
                "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png"
            },
            {
                "id": "pokemon-4",
                "name": "Bulbasur",
                "attack": 4,
                "defense": 3,
                "hp": 3,
                "speed": 3,
                "type": "Type",
                "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"
            },
            {
                "id": "pokemon-5",
                "name": "Eevee",
                "attack": 4,
                "defense": 3,
                "hp": 4,
                "speed": 5,
                "type": "Type",
                "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png"
            }
        ]



        for (const p of pokemon) {
            const existing = await this.pokemonRepository.findOne({ where: { id: p.id } });
            if (!existing) {
                await this.pokemonRepository.save(this.pokemonRepository.create(p));
            }
        }
        console.log("Finished running seed.");
    }
}