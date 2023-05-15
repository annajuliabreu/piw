import React from "react";
import MinhaCor from "./MeuContexto";

const FunctionD = () => {
    return (
        <h1>Função D</h1>
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