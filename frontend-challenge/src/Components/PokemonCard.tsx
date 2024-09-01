import { Box, Card, LinearProgress, Stack, Typography } from '@mui/material'
import { Pokemon } from '../Config/interfaces'


export const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
    return (
        <Card sx={{
            padding: 2
        }}>
            <img src={pokemon.imageUrl} alt={`Image of ${pokemon.name}`} style={{
                maxWidth: "260px",
            }} />
            <Typography variant='h5'>
                {pokemon.name}
            </Typography>
            <hr />
            <Stack direction={"column"}>
                {['hp', 'attack', 'defense', 'speed'].map((stat) => <StatItem
                    key={stat}
                    name={stat}
                    value={+pokemon[stat]}
                />)}
            </Stack>
        </Card>)
}


export const StatItem = ({ name, value }: { name: string, value: number }) => {
    return (
        <Box>
            <Typography variant='body2' sx={{ textTransform: "capitalize" }}>{name !== "hp" ? name : "HP"}</Typography>
            {/* "#75FC4D" */}
            <LinearProgress variant="determinate" value={value * 10} /> {/* Progress uses 1-100 whilst our pokemons use 1-10  */}
        </Box>
    )
}
