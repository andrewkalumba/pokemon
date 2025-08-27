// app/pokemon/[pokemon]/page.tsx
import '../pokemon.scss'
import { PokemonType } from '@/utils/types'
import DisplayPokemon from '@/components/DisplayPokemon'

interface SinglePokemonProp {
  params: {
    pokemon: string
  }
}
  let pokemonData: PokemonType ;

const PokemonSingles = async ({ params }: SinglePokemonProp) => {
  const { pokemon } = params;

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await response.json();

    pokemonData = {
   
      name: data.name,
      image: data.sprites.front_default,
      types: data.types.map((item: { type: { name: string } }) => item.type.name)
    };
    console.log(data)
    
  } catch (error) {
    console.error(`Failed to fetch Pokémon: ${error}`);
  }

  return (
    <div className="pokemon__container">
      <DisplayPokemon {...pokemonData} />
    </div>
  );
};

export default PokemonSingles;
