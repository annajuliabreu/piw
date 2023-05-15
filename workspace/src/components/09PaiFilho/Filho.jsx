import React from "react";

const Filho = ({falarComPai}) => {
    const acaoBotao = () => {
        falarComPai("Oi, Pai!")
    }
    return(
        <div>
            <h1>Filho</h1>
            <button onClick={acaoBotao}>
                Eviar mensagem para o Pai
            </button>
        </div>
    )
}

export default Filho;