import React from "react";
import MinhaCor from "./MeuContexto";
import { useContext } from "react";

const FunctionB = () => {
    const {minhaCor} = useContext(MinhaCor);
    return (
        <div>
            <h1 style={{ backgroundColor: minhaCor }}>Função B</h1>
            {/* <h1>Função B</h1> */}
        </div>
    )
}

export default FunctionB;