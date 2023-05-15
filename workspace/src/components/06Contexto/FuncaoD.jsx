import React from "react";
import MinhaCor from "./MeuContexto";
import { useContext } from "react";

const FunctionD = () => {
    const {color} = useContext(MinhaCor);
    return (
        <div>
            <h1 style={{ backgroundColor: color }}>Função D</h1>
        </div>
    )
}

export default FunctionD;


        // modo legado de consumir um contexto
        // <MinhaCor.Consumer>
        //     {
        //         cor =>
        //             <div>
        //                 <h1 style={{ backgroundColor: cor }}>Função D</h1>
        //             </div>
        //     }
        // </MinhaCor.Consumer> 