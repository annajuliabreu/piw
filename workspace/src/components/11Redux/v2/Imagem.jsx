import { useSelector } from "react-redux";
import React from 'react';


const Imagem = () => {

    const id = useSelector((state) => state.id.value);

    return (
        <>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png` }
        alt="Pokemon" 
        style={{width:"300px"}}
        />
        </>
    )
}

export default Imagem;