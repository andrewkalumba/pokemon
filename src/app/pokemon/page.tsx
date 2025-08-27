'use client'
import { useState } from 'react'
import './pokemon.scss'
import { PokemonType } from '@/utils/types.js'
import DisplayPokemon from "@/components/DisplayPokemon"
import './pokemon.scss'

const Pokemon = () => {
    const [caughtPokemon, setCaughtPokemon] = useState<PokemonType | null>()

    const fetchPokemon = async (): Promise<void> => {
        try {
            const randomNum: number = Math.floor(Math.random() * 151)
            const API_URL: string = "https://pokeapi.co/api/v2"
            const response: Response = await fetch(`${API_URL}/pokemon/${randomNum}`)
            const data = await response.json();

            const pokemonData: PokemonType = {
                id: data.id,
                name: data.name,
                image: data.sprites.front_default,
                types: data.types.map((item: { type: { name: string; }; }) => item.type.name)
            }

            setCaughtPokemon(pokemonData)
        } catch (error) {
            console.log(`Something went wrong: ${error}`)
        }
    }

    return (
        <div className="pokemon__container">
            <button onClick={fetchPokemon} className="pokemon__container--button">Catch a Pokemon</button>
            {caughtPokemon && <DisplayPokemon {...caughtPokemon} />}
        </div >
    )
}

export default Pokemon