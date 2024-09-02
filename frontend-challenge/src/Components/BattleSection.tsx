import { Stack, Box, Button } from '@mui/material'
import { PokemonCard } from './PokemonCard'
import { Pokemon } from '../interfaces/index';
import { useState } from 'react';
import { createBattle } from '../Services/API';

export const BattleSection = ({ randomPokemon, choosenPokemon, setWinner }: { randomPokemon: Pokemon, choosenPokemon: Pokemon, setWinner: React.Dispatch<React.SetStateAction<Pokemon | null>> }) => {

    const [isLoading, setIsLoading] = useState(false)

    const handleBattle = async () => {
        setIsLoading(true)

        const { winner } = await createBattle(randomPokemon.id, choosenPokemon.id)
        setWinner(winner)

        setIsLoading(false)
    }

    return (
        <>
            <Stack direction={"row"} sx={{
                width: "100%",
                gap: 2,
                justifyContent: "space-between",
            }}>
                <PokemonCard pokemon={choosenPokemon} />
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                }} >
                    <Button variant="contained" sx={{
                        backgroundColor: "#377538",
                        textTransform: "none",
                        display: { xs: "none", sm: "flex" },
                    }}
                        onClick={handleBattle}
                        disabled={isLoading}
                    >
                        Start Battle
                    </Button>
                </Box>
                <PokemonCard pokemon={randomPokemon} />
            </Stack>
            <Button variant="contained" sx={{
                backgroundColor: "#377538",
                textTransform: "none",
                display: { sm: "none" }
            }}
                onClick={handleBattle}
                disabled={isLoading}
            >
                Start Battle
            </Button>
        </>
    )
}
