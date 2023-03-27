import React from "react";
// import { Component }  from "react"

// Atividade 00. Criação de Componentes React, Funções internas a um component e, Props.

// v1 - function

// function MeusDados() {
//     return (
//       <div>
//         <h1>Anna Julia Abreu</h1>
//         <h1>Design Digital</h1>
//         <h1>UFC Quixadá</h1>
//       </div>
//     )
// }

// v2 - arrow function com return (função anônima)

// const MeusDados = () => {
//     return (
//       <div>
//         <h1>Anna Julia Abreu</h1>
//         <h1>Design Digital</h1>
//         <h1>UFC Quixadá</h1>
//       </div>
//     )
// }

// v3 - arrow function sem return
// const MeusDados = () =>
//       <div>
//         <h1>Anna Julia Abreu</h1>
//         <h1>Design Digital</h1>
//         <h1>UFC Quixadá</h1>
//       </div>

// v4 - classes

class MeusDados extends React.Component {
  render() {
    return (
      <div>
        <h1>Anna Julia Abreu</h1>
        <h1>Design Digital</h1>
        <h1>UFC Quixadá</h1>
      </div>
    )
  }
}

export default MeusDados;