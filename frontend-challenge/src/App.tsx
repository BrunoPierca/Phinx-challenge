import { Alert, CircularProgress, Container } from "@mui/material"
import { PokemonGrid } from "./Components/PokemonGrid";
import { WinnerBanner } from "./Components/WinnerBanner";
import { useEffect, useState } from "react";
import { getPokemon } from "./Services/API";
import { Pokemon } from "./interfaces";
import { BattleSection } from "./Components/BattleSection";
import { Navbar } from './Components/Navbar';

const fetchPokemon = async () => await getPokemon()

const getRandomExcluding = (excludedNumber: number, max: number) => {
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * max);
  } while (randomNumber === excludedNumber);
  return randomNumber;
}

function App() {
  const [pokemon, setPokemon] = useState<Pokemon[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [choosenPokemon, setChoosenPokemon] = useState<Pokemon | null>(null)
  const [winner, setWinner] = useState<Pokemon | null>(null)


  useEffect(() => {
    setIsLoading(true)
    fetchPokemon().then((result) => setPokemon(result))
    setIsLoading(false)
  }, [])

  if (isLoading) return <CircularProgress />

  if (!pokemon) return <Alert variant="outlined" severity="error">
    Couldn't fetch pokemon. Try again later
  </Alert>

  let randomPokemon
  if (choosenPokemon) randomPokemon = pokemon[getRandomExcluding(pokemon.indexOf(choosenPokemon), pokemon.length + 1)]
  return (
    <Container
      sx={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        py: 1.5
      }}>
      <Navbar />

      <PokemonGrid pokemon={pokemon} setChoosenPokemon={setChoosenPokemon} />

      {winner && <WinnerBanner winner={winner} />}

      {choosenPokemon && <BattleSection choosenPokemon={choosenPokemon} setWinner={setWinner} randomPokemon={randomPokemon!} />}
    </Container>
  )
}

export default App
