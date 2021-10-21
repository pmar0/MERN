import React, {useEffect, useState} from 'react';

const Pokemon = (props) => {

    const [pokemonList, setPokemonList] = useState([])

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1118")
            .then(res =>{
                return res.json()
            })
            .then(res =>{
                console.log(res)
                setPokemonList(res.results)
            })
            .catch(err =>{
                console.log(err)
                alert("I have failed.")
            })
    }, [])


    return(
        <div style={{margin:"0 auto", width:"20%"}}>
            <ul>
                {
                    pokemonList.map((pokemon,index) => (
                        <li key={index}>{pokemon.name}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Pokemon;