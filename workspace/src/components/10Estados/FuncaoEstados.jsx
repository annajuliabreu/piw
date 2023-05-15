import React from "react";
import { useState, useEffect } from "react";

// useState - permite que o componente se lembre das informações da entrada de usuário, declara um avariavel de estado que voce pode atualizar diretamente
// useEffect - permite que o componente se conecte e sincronize com sistemas externos
// ex. eu quero que o efeito seja desparado toda vida que a variavel de estado é modificada

const FuncaoEstados = () => {
    // let contador = 0;
    const [contador, setContador] = useState(0);
    const [ePar,setEPar] = useState(true);

    useEffect(
        // o efeito
        ()=>{
            if(contador%2===0) setEPar(true)
            else setEPar(false);
        }
        ,
        // quero observar essa variavel
        [contador]

    )

    const acaoBotao = () => {
        // eu modifico o set e não o contador diretamente, pois não devemos modificar uma constate
        setContador(contador+1);
    }
 
    return(
        <>
            <h1>Contador: {contador} </h1>

            <h2> é par: {"" + ePar} </h2>

            <button onClick={acaoBotao}>
                Aumentar contador
            </button>
        </>
    )
}

export default FuncaoEstados;
