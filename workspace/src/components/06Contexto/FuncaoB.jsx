import React from "react";
import MinhaCor from "./MeuContexto";
import { useContext } from "react";

const FunctionB = () => {
    const cor = useContext(MinhaCor);
    return (
        <div>
            <h1 style={{ backgroundColor: cor }}>Função B</h1>
        </div>
    )      
}

export default FunctionB;