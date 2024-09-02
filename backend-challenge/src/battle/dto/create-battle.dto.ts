import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateBattleDto {
    @ApiProperty({
        title: "Pokemon One's ID",
    })
    @IsString()
    @IsNotEmpty()
    readonly pokemonOne: string;

    @ApiProperty({
        title: "Pokemon Two's ID",
    })
    @IsString()
    @IsNotEmpty()
    readonly pokemonTwo: string;
}
