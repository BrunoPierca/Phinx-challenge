import { Box, Typography, Grid2 as Grid, } from '@mui/material'
import { Pokemon } from '../interfaces'

export const PokemonGrid = ({ pokemon, setChoosenPokemon }: { pokemon: Pokemon[], setChoosenPokemon: React.Dispatch<React.SetStateAction<Pokemon | null>> }) => {
    return (
        <Box>
            <Typography variant="h5" mb={1}>
                Select your pokemon
            </Typography>
            <Grid container justifyContent={{ xs: "space-around", sm: "space-between" }} gap={{ xs: 2, sm: 1 }}>
                {pokemon.map((pokemonItem) => <Grid
                    key={pokemonItem.id}
                    size={{ xs: 6, sm: 2 }}
                    onClick={() => setChoosenPokemon(pokemonItem)}
                    sx={{
                        boxShadow: 12,
                        borderRadius: 4,
                        padding: 1,
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        maxWidth: "150px",
                    }}>

                    <img src={pokemonItem.imageUrl} alt={`Image of ${pokemonItem.name}`} style={{ width: "80%", maxWidth: "7rem", height: "auto", alignSelf: "center" }} />
                    <Typography pt={1}>
                        {pokemonItem.name}
                    </Typography>
                </Grid>)}
            </Grid>
        </Box>)
}
