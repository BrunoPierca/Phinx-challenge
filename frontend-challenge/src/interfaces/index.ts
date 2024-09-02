export interface Pokemon {
    id: string,
    name: string,
    attack: number
    defense: number
    hp: number
    speed: number
    type: string,
    imageUrl: string,
    [key: string]: number | string;
}

export interface Battle {
    id: string;

    winner: Pokemon;

    loser: Pokemon;

    date: Date;
}
