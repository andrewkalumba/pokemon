"use client"

import './types.scss';
import { typesItemProp } from "@/utils/types"
import { useEffect, useState } from "react";

const API_ENDPOINT = "https://pokeapi.co/api/v2/type";

interface resultsProp {
results:typesItemProp[]
}

const Types = () => {
     const [typesData, setTypesData] = useState<typesItemProp []>([])

    const FetchData = async () => {
        try {
           
            let response = await fetch(API_ENDPOINT);
            let data:resultsProp = await response.json();
            setTypesData(data.results)
            console.log(data);
           
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        FetchData()
    }, []);

    return (
        <div className="pokemon__types">
            {typesData && typesData.filter((_item, index)=> index < 18).map((item:typesItemProp, index: number)=> <a key={index} href={`/types/${item.name}`} className={`pokemon__content--${item.name}`}>{item.name}</a>)}
        </div>
    )

}

export default Types
