import FunctionB from './FunctionB';
import React from 'react';

const FunctionA = ({sobrenome}) => {
    return(
        <div>
            <h1>Componente A - {sobrenome}</h1>
            <FunctionB nome="Anna" sobrenome={sobrenome}/>
            <FunctionB nome="Biel"/>
            <FunctionB nome="Leo"/>
            <FunctionB nome="Julia" sobrenome={sobrenome}/>
        </div>
    )
}

export default FunctionA;