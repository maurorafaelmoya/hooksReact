import React from 'react'
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';
import { PokemonCard04 } from './PokemonCard';
import { LoadingMessage04 } from './LoadingMessage';


export const Layout = () => {

    const {counter, increment, minus} = useCounter(25);
    const {data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    return (
        <>
            <h1> Informacion de pokemon</h1>
            <hr/>

            

            {isLoading && <LoadingMessage04/>}

            {/* <h2>{data?.name}</h2> */}
            {/* <pre> { JSON.stringify(data, null, 2)} </pre> */}

            {!isLoading && <PokemonCard04
                id={data?.id} 
                name={data?.name} 
                sprites={[
                    data?.sprites.front_default,
                    data?.sprites.back_default,
                    data?.sprites.front_shiny,
                    data?.sprites.back_shiny
                ]}
                abilities={data.abilities}
                 /> }
            
            
            <button 
                disabled={counter===1}
                onClick={minus}>
                Anterior
            </button>
            <button
                onClick={increment}
            >
                Siguiente
            </button>

        </>
    )
}
