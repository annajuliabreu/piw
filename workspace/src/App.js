import React from 'react';
import './App.css';

// ap1
// import Questao01X from './components/ap1/Questao01/Questao01X';
// import Questao02 from './components/ap1/Questao02/Questao02';
// import Questao03 from './components/ap1/Questao03/Questao03';


// atividades ----
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
// import { Supermercado, Legume, Fruta, Bebida, Limpeza } from './components/05_Children'
// import Planets from './components/planets/planet';

// conteúdos ------
// import LoremIpsum from './components/loremipsum/01_LoremIpsum';
// import Pai from './atividades/atividade01/questao01/01Pai'
// import PlacaMae from './atividades/atividade01/02MeuPC';
// import * as PC from './atividades/atividade01/02MeuPC';
// import { Hero, Enemy, Arena, World } from './atividades/atividade01/03Batalha';
// import FunctionA from './components/06Contexto/FuncaoA';
// import FunctionB from './components/06Contexto/FuncaoB';
// import FunctionC from './components/06Contexto/FuncaoC';
// import FunctionD from './components/06Contexto/FuncaoD';
// import FunctionA from './atividades/atividade02/questao01/FuncaoA';
// import Avo from './atividades/atividade02/questao02/Avo';
// import PokemonAxios from './components/10Axios/PokemonAxios';
// import TelaPrincipal from './components/11Redux/v2/TelaPrincipal';
// import MeuIndex from './components/11Redux/v2/MeuIndex';
// import { MinhaPromessa } from './components/12Promise/MinhaPromessa';
// import SaveData from './components/07LocalStorage/FunctionLocalStorage';
// import Pai from './components/09PaiFilho/Pai';
// import FuncaoEstados from './components/10Estados/FuncaoEstados';
// import SingIn from './components/13MUI/01SingIn/SingIn';
import MyMenuV0 from './components/13MUI/02CRUD/MyMenuV0';



function App() {
  return (
    <div className="primeira-aula">
      {/* ---- ap1 */}
      {/* <Questao01X /> */}
      {/* <Questao02/> */}
      {/* <Questao03/> */}

      {/* ---- Estudo // Eu crio o component no arquivo jsx e ingeto ele aqui no app js*/}
      {/* {<LoremIpsum/>} */}
      {/* {<Planets/>} */}

      {/* ------ Atividade 00 */}
      {/* {<HelloWorld/>} */}
      {/* <MeusDados /> */}
      {/* <MyProps nome="Anna" curso="Design Digital"/> */}
      {/* <MyProps nome="Yakov" curso="Teologia"/> */}
      {/* {<Temperatura/>}

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

      {/* ------- Atividade 02 */}
      {/* <Avo /> */}

      {/* ------ Exemplos*/}
      {/* <SingIn /> */}
      <MyMenuV0 />
      {/* <PokemonAxios /> */}
      {/* <Pai /> */}
      {/* <FuncaoEstados /> */}
      {/* <SaveData/> */}
      {/* <FunctionA /> */}
      {/* < FunctionA sobrenome="Abreu" />
      {/* {<MeusDados nome="Anna Julia Abreu" curso="Design Digital" universidade="UFC Quixadá"/>} */}

       {/* <MinhaPromessa/> */}

        {/* <Supermercado nome="daNaju"> */}
          {/* esses produtos são "filhos" do Supermercado, os children, componentes que estão dentro do conteiner Supermercado*/}
          {/* <Legume nome="Batata" />
          <Fruta nome="Banana" />
          <Bebida nome="Água" />
          <Bebida nome="Suco de abacaxi"/>
          <Limpeza nome="Sabão de coco"/> */}
        {/* </Supermercado> */}
        
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

      {/* <PokemonAxios/> */}

      {/* <MeuIndex /> */}
    </div>
  )
}

export default App;