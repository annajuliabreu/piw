import React from "react";
import FunctionD from "./FuncaoD";
import MinhaCor from "./MeuContexto";
import { useContext } from "react";

const FunctionC = () => {
    const {color} = useContext(MinhaCor);
    return (
        <div>
            <h1 style={{ backgroundColor: color }}>Função C</h1>
            <FunctionD />
        </div>
    )
}

export default FunctionC;