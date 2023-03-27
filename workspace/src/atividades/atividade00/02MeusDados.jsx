import React from "react";

// versão direta:

const MeusDados = (props) => {
  return (
    <div>
        {/* <h1>Meu nome é {props.nome}, meu curso é {props.curso} e estudo na {props.universidade}</h1> */}
        <div>{props.nome}</div>
        <div>{props.curso}</div>
        <div>{props.universidade}</div>
    </div>
  )
}


// versão desconstruida:

// const MeusDados = (props) => {
// const{nome,curso,universidade} = props
//   return (
//     <div>
//         {/* <h1>Meu nome é {props.nome}, meu curso é {props.curso} e estudo na {props.universidade}</h1> */}
//         <div>{nome}</div>
//         <div>{curso}</div>
//         <div>{universidade}</div>
//     </div>
//   )
// }

// ou...

// const MeusDados = (props) => {
//   let nome = props.nome;
//   let curso = props.curso;
//   let universidade = props.universidade;
//     return (
//       <div>
//           {/* <h1>Meu nome é {props.nome}, meu curso é {props.curso} e estudo na {props.universidade}</h1> */}
//           <div>{nome}</div>
//           <div>{curso}</div>
//           <div>{universidade}</div>
//       </div>
//     )
//   }

// ou...

// const MeusDados = ({nome,curso,universidade}) => {
//   // const{nome,curso,universidade} = props
//   return (
//     <div>
//         {/* <h1>Meu nome é {props.nome}, meu curso é {props.curso} e estudo na {props.universidade}</h1> */}
//         <div>{nome}</div>
//         <div>{curso}</div>
//         <div>{universidade}</div>
//     </div>
//   )
// }

export default MeusDados;


// entendendo a desconstrução:

// const obj = { a: 1, b: 2, c: 3};
// const { a, b } = obj;

// const obj = { nome: "Anna", curso: "Design Digital", universidade: "UFC Quixadá"};
// const {nome, curso, universidade} = obj;



// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment