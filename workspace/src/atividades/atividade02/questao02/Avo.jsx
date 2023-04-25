import { Fragment, useState } from "react";
import Filho from "./Filho";
import PokemonContexto from "./PokemonContexto";

const Avo = () => {
    // let numero = 25;

    const [numero, setNumero] = useState(10);

    const acaoBotao = () => {
        // alert("I clicked...");
        // numero = numero + 1;
        // console.log(numero);
        setNumero(numero + 1);
    }

    return (
        <PokemonContexto.Provider value={numero}>
            <Fragment>
                <h1>Avô</h1>
                <img
                    // scr={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+numero+".png"}
                    scr={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}
                    alt="Pokemon"
                    style={{width: "100px", height: "100px"}}
                /> <br/>
                <button
                    onClick={
                        ()=>{
                           acaoBotao();
                        }
                    }> 
                    Click me!
                </button>
                <Filho />
            </Fragment>
        </PokemonContexto.Provider>

    )
}

export default Avo;