import { FC } from 'react'
import Navbar from '../components/navbar'
import Pokemons from './pokemons'


const App : FC = () => {
  return(
    <> 
      <Navbar />
      <Pokemons />
      
    </>
  )
}

export default App