import { PokemonType } from "@/utils/types";
import Image from "next/image";

const DisplayPokemon = ({id, name, types, image}:PokemonType) => {
    return (
        <div>
            <div className="pokemon__content--name">#{id} {name}</div>
            <Image src={image} alt={name} height={300} width={300}/>
            <div className="pokemon__content--types">
            {types.map((item:string, index:number)=> <span className={`pokemon__content--${item}`} key={index}>{item}</span>)}
            </div>
        </div>
    )
}

export default DisplayPokemon