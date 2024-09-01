import { Box, Button, Card, Container, Grid2 as Grid, Stack, Typography } from "@mui/material"
import { PokemonCard } from './Components/PokemonCard';

const placeholderPokemon = [
  {
    id: "pokemon-1",
    name: "Pikachu",
    attack: 4,
    defense: 3,
    hp: 3,
    speed: 6,
    type: "Type",
    imageUrl: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png"
  },
  {
    id: "pokemon-2",
    name: "Charmander",
    attack: 4,
    defense: 3,
    hp: 3,
    speed: 4,
    type: "Type",
    imageUrl: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png"
  },
  {
    id: "pokemon-3",
    name: "Squirtle",
    attack: 3,
    defense: 4,
    hp: 3,
    speed: 3,
    type: "Type",
    imageUrl: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png"
  },
  {
    id: "pokemon-4",
    name: "Bulbasur",
    attack: 4,
    defense: 3,
    hp: 3,
    speed: 3,
    type: "Type",
    imageUrl: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"
  },
  {
    id: "pokemon-5",
    name: "Eevee",
    attack: 4,
    defense: 3,
    hp: 4,
    speed: 5,
    type: "Type",
    imageUrl: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png"
  }
]


function App() {

  return (
    <Container
      sx={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        py: 1.5
      }}>
      <Typography variant="h3" >
        Battle of Pokemon
      </Typography>

      <Box>
        <Typography variant="h5" mb={1}>
          Select your pokemon
        </Typography>
        <Grid container justifyContent={{xs: "space-around", sm: "space-between"}} gap={{ xs: 2, sm: 1 }}>
          {placeholderPokemon.map((pokemon) => <Grid
            key={pokemon.id}
            size={{ xs: 6, sm:2}}
            sx={{
              boxShadow: 12,
              borderRadius: 4,
              padding: 1,
              display: "flex",
              flexDirection: "column",
              width: "100%",
              maxWidth: "150px",
            }}>

            <img src={pokemon.imageUrl} alt={`Image of ${pokemon.name}`} style={{ width: "80%", maxWidth: "7rem", height: "auto", alignSelf: "center" }} />
            <Typography pt={1}>
              {pokemon.name}
            </Typography>
          </Grid>)}
        </Grid>
        {/* <Stack direction={{ xs: "column", sm: "row" }} gap={2} justifyContent={"space-between"} alignItems={"center"} >
          {placeholderPokemon.map((pokemon) => <Box
            key={pokemon.id}
            sx={{
              boxShadow: 12,
              borderRadius: 4,
              padding: 1,
              display: "flex",
              flexDirection: "column",
              width: "100%",
              maxWidth: "150px",
            }}>

            <img src={pokemon.imageUrl} alt={`Image of ${pokemon.name}`} style={{ width: "80%", maxWidth: "7rem", height: "auto", alignSelf: "center" }} />
            <Typography pt={1}>
              {pokemon.name}
            </Typography>
          </Box>)}
        </Stack> */}
      </Box>

      <Card sx={{
        width: "100%",
        border: "3px solid",
        borderColor: "#377538",
        p: 1,
        boxShadow: 12
      }}
      >
        <Typography variant="h5">Pikachu wins!</Typography>
      </Card>

      <Stack direction={"row"} sx={{
        width: "100%",
        gap: 2,
        justifyContent: "space-between",
      }}>
        <PokemonCard pokemon={placeholderPokemon[0]} />
        <Box sx={{
          display: "flex",
          alignItems: "center",
        }} >
          <Button variant="contained" sx={{
            backgroundColor: "#377538",
            textTransform: "none",
            display: "none",
            sm: { display: "flex" }
          }}>
            Start Battle
          </Button>
        </Box>
        <PokemonCard pokemon={placeholderPokemon[4]} />
      </Stack>
      <Button variant="contained" sx={{
        backgroundColor: "#377538",
        textTransform: "none",
        sm: { display: "none" }
      }}>
        Start Battle
      </Button>
    </Container>
  )
}

export default App
