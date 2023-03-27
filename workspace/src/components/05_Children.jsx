import React from "react"
// import {Children} from "react"

const Supermercado = ({children, nome}) => {
    return(
        <div>
            <h1>Supermercado {nome}</h1>
        </div>
    )
}

const Legume = ({nome}) =>{
    <div><h3>Legume {nome}</h3></div>
}

const Fruta = ({nome}) =>{
    <div><h3>Fruta {nome}</h3></div>

}

const Bebida = ({nome}) =>{
    <div><h3>Bebida {nome}</h3></div>

}

export {Supermercado, Legume, Fruta, Bebida}