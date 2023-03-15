// props - palavra reservada do react
// chave nome que passei como parametro

// v0
// const MyProps = (props) => {
//     return (
//         <div>
//             <h1>Meu nome é: {props.nome} e meu curso é {props.curso}</h1>
//         </div>
//     )
// }

// export default MyProps

// v1
// const MyProps = (props) => {
//     // const {crio duas variaveis}
//     const {nome,curso}= props

//     return (
//         <div>
//             <h1>Meu nome é: {nome} e meu curso é {curso}</h1>
//         </div>
//     )
// }

// export default MyProps


// v2
// const MyProps = (props) => {
//     let nome = props.nome
//     let curso = props.curso
//     return (
//         <div>
//             <h1>Meu nome é {nome} e meu curso é {curso}</h1>
//         </div>
//     )
// }

// export default MyProps


// v2
// descontroi a props logo no início
const MyProps = ({nome,curso}) => {

    return (
        <div>
            <h1>Meu nome é {nome} e meu curso é {curso}</h1>
        </div>
    )
}

export default MyProps