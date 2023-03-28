import React from "react";
import FunctionB from "./FuncaoB";
import FunctionC from "./FuncaoC";
import MinhaCor from "./MeuContexto";

const FunctionA = () => {
    const cor = "blue";
    return (
        <MinhaCor.Provider value={{minhaCor:cor, nome:"Anna"}}>
            <div>
                <h1 style={{ backgroundColor: cor }}>Função A</h1>
                <FunctionB />
                <FunctionC />
                {/* <FunctionC cor={cor} /> */}
            </div>
        </MinhaCor.Provider>
    )
}

export default FunctionA;