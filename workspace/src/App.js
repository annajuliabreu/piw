// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import './App.css';
// import HelloWorld from './components/00_HelloWorld';
// import HelloWorld from './components/00_HelloWorld';
// import Calculadora from './components/01_Calculadora';
// import MyProps from './components/02_MyProps';
// import MeusDados from './atividades/atividade00/02MeusDados';
// import Temperatura from './atividades/atividade00/03Temperatura';
// import FunctionA from './components/03Hierarquia/FunctionA';
// import { Header, Body, Footer } from './components/04_Multiplos';
// import { Header as H, Body as B, Footer as F} from './components/04_Multiplos';
// import * as Site from './components/04_Multiplos'
// import {Supermercado, Legume, Fruta, Bebida} from './components/05_Children'
// import Planets from './components/planets/planet';
// import LoremIpsum from './components/loremipsum/01_LoremIpsum';
// import Pai from './atividades/atividade01/questao01/01Pai'
// import PlacaMae from './atividades/atividade01/02MeuPC';
// import * as PC from './atividades/atividade01/02MeuPC';
// import { Hero, Enemy, Arena, World } from './atividades/atividade01/03Batalha';
import FunctionA from './components/06Contexto/FuncaoA';
// import FunctionB from './components/06Contexto/FuncaoB';
// import FunctionC from './components/06Contexto/FuncaoC';
// import FunctionD from './components/06Contexto/FuncaoD';

function App() {
  return (
    <div className="primeira-aula">
      {/* ---- Estudo // Eu crio o component no arquivo jsx e ingeto ele aqui no app js*/}
      {/* {<LoremIpsum/>} */}
      {/* {<Planets/>} */}

      {/* -----Atividade 01 */}
      {/* {<Pai />} */}
      {/* <World>
        <Arena arena="Coliseu em Roma/Itália">
            <Hero name="Batman" />
            <Enemy name="Superman" />
        </Arena>
      </World> */}
      {/* <PC.PlacaMae nome="Gigabyte" preco="5555.55"/>
      <PC.PlacaDeVideo nome="2060" preco="777.77"/>
      <PC.Memoria nome="DDR 4" preco="88.99"/> */}

      {/* ------ Atividade 00 */}
      {/* {<HelloWorld/>} */}
      {/* <MeusDados /> */}
      {/* <MyProps nome="Anna" curso="Design Digital"/>
      <MyProps nome="Yakov" curso="Teologia"/> */}
      {/* {<Temperatura/>} */}

      {/* ------ Exemplos*/}
      <FunctionA />
      {/* {< FunctionA sobrenome="Abreu" />} */}
      {/* {<MeusDados nome="Anna Julia Abreu" curso="Design Digital" universidade="UFC Quixadá"/>} */}
      {/* {
        <Supermercado nome="daNaju">
          <Legume nome="Batata"/>
        </Supermercado>
      } */}

      {/* <H/>
      <B/>
      <F/> */}

      {/* < Header />
      < Body />
      < Footer /> */}

      {/* 
      <Site.Header/>
      <Site.Body/>
      <Site.Footer/> */}
    </div>
  );
}

export default App;
