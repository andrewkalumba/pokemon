import '../types.scss'
type TypePageProp = {
    pokemon:{
    name: string
    url: string
    number: string
    }
    }

const TypePage = async ({ params }: { params: { type: string } }) => {
    const { type } = await params;

    let data;
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
        data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }

    return (
        <div className='pokemon__types'>
            <h1>{type}</h1>
            {data && data.pokemon.map((item: TypePageProp, index: number) => <a key={index} href={`/pokemon/${item.pokemon.name}`}className={`pokemon__content--${type}`}> {item.pokemon.name}</a>)}
        </div>
    )
}

export default TypePage