import React, { Fragment } from "react";

/*ps. não usei o props, para não ficar escrevendo direto o props, 
usei aqui a desconstrução, chamando direto o nome da propriedade 
e não mencionando ela com o pros.nome-da-propriedade*/

const Filho = ({ altura, peso }) => {
    const calcularIMC = (peso, altura) => {
        const imc = peso / (Math.pow(altura, 2));
        return (
            imc
        )
    }
    const renderizarMsg = (imc) => {
        if (imc < 18) {
            return (
                <span>abaixo do peso</span>
            )
        } else if (imc > 25) {
            return (
                <span>acima do peso</span>
            )
        } else {
            return (
                <span>peso ideal</span>
            )
        }
    }

    const imc = calcularIMC(peso, altura);
    const res = renderizarMsg(calcularIMC(peso, altura));

    return (
        <Fragment>
            <h1>
                {/* O IMC do meu filho é {Math.round(calcularIMC(props.peso, props.altura))} e o ele está {renderizarMsg(Math.round(calcularIMC(props.peso, props.altura)))}! */}
                O IMC (Índice de Massa Corporal) do meu filho é {imc.toFixed(2)} e o ele está {res}!
            </h1>
        </Fragment>
    )
}

export default Filho;