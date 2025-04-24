import { FavoritePokemons, PokemonGrid, PokemonsResponse, SimplePokemon } from '@/pokemons';

export const metadata = {
 title: 'Favoritos',
 description: '151 Pókemons',
};



export default async function PokemonsPage() {

    return (

        <div className="flex flex-col">
            <span className="text-5xl my-2">Pokemons favoritos <small className='text-blue-500'>Global State</small></span>
            <FavoritePokemons/>
        </div>
    );
}

