import FunctionB from './FunctionB';

const FunctionA = ({sobrenome}) => {
    return(
        <div>
            <h1>Componente A - {sobrenome}</h1>
            <FunctionB nome="Anna" sobrenome={sobrenome}/>
            <FunctionB nome="Biel"/>
            <FunctionB nome="Bibi"/>
            <FunctionB nome="Julia" sobrenome={sobrenome}/>
        </div>
    )
}

export default FunctionA;