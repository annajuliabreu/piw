import React from 'react';
import Children from 'react';
import { Fragment, cloneElement  } from 'react';

// v0
const Supermercado = ({ children, nome }) => {
    return (
        <div>
            <h1>Supermercado {nome}</h1>
            {children}
        </div>
    )
}

// v1
// const Supermercado = ({ children, nome }) => {
//     return (
//         <Fragment>
//             <h1>Supermercado {nome}</h1>
//             {/* {
//                 Children.map(
//                     // passo 1, inicialização - o array que vou modificar/trabalhar
//                     children,
//                     // passo 2, o que eu vou fazer em cada elemento? - função callback que vai dizer o que eu vou fazer com o children, os filhos de supermercado 
//                     // passo 3, como eu vou chamar cada elemento, ai eu retorno o que realmente eu vou fazer com cada filho
//                     (filho) => {
//                         return (
//                             <div style={{ backgroundColor: "red" }}>
//                                 {filho}
//                             </div>
//                         )
//                     }
//                 )
//             } */}

//             {Children.map(children, filho => <div style={{ backgroundColor: "red" }} >{filho}</div>)}
//         </Fragment>
//     )
// }

// v2
// const Supermercado = ({ children, nome }) => {
//     return (
//         <Fragment>
//             <h1>Supermercado {nome}</h1>
//             {
//                 Children.map(
//                     children,
//                     filho => 
//                         cloneElement(filho, {supermercado:nome})
//                 )
//             }
//         </Fragment>
//     )
// }

const Legume = ({ nome }) => {
    return (
        <div>
            <h3>Legume: {nome}</h3>
        </div>
    )
}

const Fruta = ({ nome }) => {
    return (
        <div>
            <h3>Fruta: {nome}</h3>
        </div>
    )

}

const Bebida = ({ nome }) => {
    return (
        <div>
            <h3>Bebida: {nome}</h3>
        </div>
    )
}

const Limpeza = ({ nome }) => {
    return (
        <div>
            <h3>Produtos de limpeza: {nome}</h3>
        </div>
    )
}

export { Supermercado, Legume, Fruta, Bebida, Limpeza }