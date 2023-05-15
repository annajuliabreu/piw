import Filho from "./Filho";
import React from "react";

const Pai = () => {
    const mensagemDoFilho = (msg) => {
        alert("Meu filho disse: " + msg)
    }
    return(
        <div>
            <h1>Pai</h1>
            <Filho falarComPai={mensagemDoFilho} />
        </div>
    )
}

export default Pai;