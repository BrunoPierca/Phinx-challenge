import { Box, Card, CircularProgress, Divider, LinearProgress, Stack, Typography } from '@mui/material'
import { Pokemon } from '../interfaces'


export const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
    if (!pokemon) <CircularProgress />
    return (
        <Card sx={{
            padding: 2,
            display: 'flex',
            flexDirection: "column"
        }}>
            <img src={pokemon.imageUrl} alt={`Image of ${pokemon.name}`} style={{
                maxWidth: "260px",
                width: "80%",
                margin: "0 auto"
            }} />
            <Typography variant='h5' pb={0.5}>
                {pokemon.name}
            </Typography>
            <Divider />
            <Stack direction={"column"} pb={0.5}>
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
