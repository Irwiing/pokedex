class PokedexService {
    private readonly _baseUrl: string
    private readonly _firstGenNumber: number
    private readonly _imgUrl: string

    constructor() {
        this._baseUrl = 'https://pokeapi.co/api/v2/pokemon'
        this._firstGenNumber = 151
        this._imgUrl = 'https://pokeres.bastionbot.org/images/pokemon/'
    }

    public async findAll(limit: number = 0, offset: number = 0) : Promise<any> {
        const take = limit || this._firstGenNumber
        const url = `${this._baseUrl}?limit=${take}&offset=${offset}`
        const response :any = await fetch(url)

        const { results } = await response.json()

        const details = results.map(async (pokemon : any) => {
            const pokemonDetails = await fetch(pokemon.url)
            const obj = await pokemonDetails.json()
            return {
                sprite: `${this._imgUrl}/${obj.id}.png`,
                name: obj.name,
                types: obj.types
            }
        })
        
        const pokemons = await Promise.all(details)
        return pokemons
    }

}

export default PokedexService