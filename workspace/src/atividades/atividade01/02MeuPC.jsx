import React, {Fragment} from "react";

const PlacaMae = ({nome, preco}) => {
    return(
        <Fragment>
            <h1>Placa Mãe: Nome: {nome} e preço: {preco} </h1>
        </Fragment>
    )
}

const PlacaDeVideo = ({nome, preco}) => {
    return(
        <Fragment>
            <h1>Placa de vídeo: Nome: {nome} e preço: {preco} </h1>
        </Fragment>
    )
}

const Memoria = ({nome, preco}) => {
    return(
        <Fragment>
            <h1>Memória: Nome: {nome} e preço: {preco} </h1>
        </Fragment>
    )
}



export {PlacaMae, PlacaDeVideo, Memoria}