import { FC } from "react"
import './styles.css'

interface IPokemon {
    name: string,
    sprite: string,
    types: {
        name: string
    }
}

const Pokecard : FC<any> = ({pokemon}) =>{
    const types = pokemon.types.map((typeInfo: any) => typeInfo.type.name)
    return (
        <div className={`Card ${types[0]}`}>
            <header className='Poke-name'>
                <h2>
                    {pokemon.name}
                </h2>
            </header>
            <img src={pokemon.sprite} alt={pokemon.name}/>
            
            <div className='Poke-types'>
                {types.join(' | ')}
            </div>
        </div>
    )
}

export default Pokecard