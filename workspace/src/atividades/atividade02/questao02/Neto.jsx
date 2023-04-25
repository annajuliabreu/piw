import { Fragment, useContext } from "react";
import PokemonContexto from "./PokemonContexto";


const Neto = () => {
    let numero = useContext({PokemonContexto});
    return (
        <Fragment>
            <h1>Neto</h1>
            <img
                    // scr={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+numero+".png"}
                    scr={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}
                    alt="Pokemon"
                    style={{width: "100px", height: "100px"}}
                />
        </Fragment>
    )
}

export default Neto;