import React from "react";

import FunctionB from "./FuncaoB";
import FunctionC from "./FuncaoC";

import MinhaCor from "./MeuContexto";

const FunctionA = () => {
    const cor = "blue";

    return (
        // eu envolvo toda a minha árvore com o Provider
        // todo contexto tem um valor padrão
        <MinhaCor.Provider value={{minhaCor:cor, cor: "green", color: "purple"}}>
            <div>
                <h1 style={{ backgroundColor: cor }}>Função A</h1>
                <FunctionB />
                <FunctionC />
            </div>
        </MinhaCor.Provider>
    )
}

export default FunctionA;