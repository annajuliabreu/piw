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
// import Calculadora from './components/01_Calculadora';
// import MyProps from './components/02_MyProps';
// import MeusDados from './atividades/atividade00/02MeusDados';
import Temperatura from './atividades/atividade00/03Temperatura';

function App() {
  return (
    <div className="primeira-aula">
      {/* <MeusDados /> */}

      {/* <MyProps nome="Anna" curso="Design Digital"/>
      <MyProps nome="Yakov" curso="Teologia"/> */}
      
      {<Temperatura/>}

      {/* {<MeusDados nome="Anna Julia Abreu" curso="Design Digital" universidade="UFC Quixadá"/>} */}
    </div>
  );
}

export default App;
