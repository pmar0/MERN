import React, {useEffect, useState} from 'react';
import axios from "axios";

const Pokemon = (props) => {

    const [pokemonList, setPokemonList] = useState([])

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1118")
            .then(res =>{
                console.log(res.data)
                setPokemonList(res.data.results)
            })
            .catch(err =>{
                console.log(err)
                alert("I have failed.")
            })
    }, [])


    return(
        <>
            <ul>
                {
                    pokemonList.map((pokemon,index) => (
                        <li key={index}>{pokemon.name}</li>
                    ))
                }
            </ul>
        </>
    );
};

export default Pokemon;