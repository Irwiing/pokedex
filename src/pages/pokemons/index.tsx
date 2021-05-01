import { FC, useEffect, useState } from "react"
import Pokecard from "../../components/pokecard"
import PokedexService from "../../services/pokedex-service"
import './styles.css'

const getSessions = async (key: string) =>{
  let stored = sessionStorage.getItem(key)
  
  if(!stored){
    sessionStorage.setItem(key, JSON.stringify(await new PokedexService().findAll()))
    return sessionStorage.getItem(key);  
  }

  return JSON.parse(stored)
}

const Pokemons :FC = () => {
    const[pokemons, setPokemons] = useState<any[]>([]);

    useEffect(()=>{
      const getPokemons = async () => {
        setPokemons(await getSessions('pokemons'))
      }
      getPokemons()      
      }, [])
    

    return(
        <div className='Pokemons'>
            {pokemons.map((pokemon, i) => <Pokecard pokemon={pokemon} key={i}/>)}
        </div>
    )
}

export default Pokemons