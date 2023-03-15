// comecar sempre assim
// funcoes internas ao component
// const é uma palavra reservada

const Calculadora = () => {

    function somar(x,y){
        return x + y
    }

    const subtrair = (x,y) => {
        return x -y
    }

    const multiplicar = (x,y) => x * y

    const dividir = (x,y) => {
        return x / y 
    }

    // passar uma funcao para dentro de uma funcao, callback, promessas

    const chamarDividir = (minhaDivisao) =>{
        return minhaDivisao(50,5)
    }

    const resto = (x,y) => x%y

    // vc quer retornar a funcao e nao executar
    const renderizar = () => {
        return(
            <div>
                <h1>JSX de FUNÇÃO INTERNA</h1>
            </div>
        )
    }

    const firstLove = () => <h1>Mt 6:33</h1>

    return (
        <div>
            <h1>O resultado da soma é: {somar(10,5)}</h1>
            <h1>O resultado da subtração é: {subtrair(10,5)}</h1>
            <h1>O resultado da multiplicar é: {multiplicar(10,5)}</h1>
            <h1>O resultado da divisão é: {dividir(10,5)}</h1>

            {/* conteúdo mais avancado: */}
            <h1>O resultado da segunda divisão é: {chamarDividir(dividir)}</h1>

            <h1>O resultado do resto da divisão é: {resto(10,5)}</h1>

            {renderizar()}
            {firstLove()}
        </div>
    )
}

export default Calculadora