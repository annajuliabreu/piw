import { Fragment, useContext } from "react";
import Neto from "./Neto";
import PokemonContexto from "./PokemonContexto";


const Filho = () => {
    let numero = useContext({PokemonContexto});
    return (
        <Fragment>
            <h1>Filho</h1>
            <img
                    // scr={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+numero+".png"}
                    scr={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}
                    alt="Pokemon"
                    style={{width: "100px", height: "100px"}}
                />
            <Neto />
        </Fragment>
    )
}

export default Filho;