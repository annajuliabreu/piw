# Estudos para disciplina de PIW 2023.1
Repositório de estudos para disciplina de Projeto de Interface Web

##### Referência de escrita: [Sintaxe básica de gravação e formatação no GitHub](https://docs.github.com/pt/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

### O que é React?
> "A declarative, efficient, and flexible JavaScript library for building user interfaces"

React é "uma biblioteca JavaScript declarativa, eficiente e flexível para a criação de interfaces de usuário (UI)"

- Biblioteca para criação de interfaces (web e nativas)
- Surgiu em 2011 no Facebook, teve seu código aberto em 2013
- Características: É uma Biblioteca e não é um framework; é baseado em Components (pequenos blocos, como um Lego); é usado para criar SPA (Single Page Application).
- Criado para trabalhar com interatividade
- O React é feito com JavaScript
- O React é eficiente (Virtual DOM)
- O React pode ser utilizado para criar Apps Mobile com o React Native
- O React é a biblioteca de criação de interfaces mais popular e é utilizado em grandes empresas: Facebook, Instagram, WhatsApp, Netflix, Dropbox...

### **Components** - O que são components e porque eles são importantes?
- Componentes são os pequenos blocos que compõem uma interface.
- Diferente do HTML tradicional, onde escrevemos a página inteira em um arquivo, componentes definem pequenos blocos reutilizáveis e extensíveis

![React Components](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*V3ZOFh5Ed4MLCIgi6FnLmA.jpeg)

- O React é uma biblioteca baseada no conceito de components.
- Os components permitem dividir a Interface do Usuário em partes independentes e reutilizáveis.
- "É um pequeno pedaço isolável da tela reaproveitável, usá-los para compor telas."

Vantagens
- Podem ser escritos uma vez e reutilizados várias vezes facilmente
- Tornam o processo de modificar uma parte específica da interface muito mais fácil (ex.: mudar o componente de botão atualiza todos os botões da interface)
- Deixa a estrutura de um projeto mais organizada, com cada arquivo responsável por uma pequena parte ao invés de toda uma página

São como funções JavaScript
- Aceitam entradas arbitrárias (chamadas **props**)
- Retorna Elementos React

Dois tipos de Componentes: 
- Função
- Classe (features extras)

Exemplo de como é definido um componente de função:
```
    function Welcome(props){
        return <h1>Hello, {props.name}</h1>;
    }
```
Template de um component:
```
    const MyProps = () => {
        return (
            <div>

            </div>
        )
    }
    export default MyProps

```

### O que é JSX?
- Um exemplo de código JSX é:
```
    const element = <h1> className="title">Hello World!</h1>
```
- Não é apenas HTML nem apenas Js.
- JSX é uma extensão da linguagem Js.
- JSX serve para descrever como a nossa User Interface (UI) deve ser.
- JSX não é interpretado pelo browser, por este motivo devemos utilizar um transpiler/compilador (em geral babel) para realizar essa transpilação.
- É o formato usado pelo React para representar os elementos do DOM
- Facilita o processo de escrita do conteúdo que deve ser renderizado na tela.
- Facilita a construção de componentes HTML usando JS
- Permite a escrita de código HTML diretamente no JS
- Trata código HTML como objeto: 
    - Pode-se manipular como qualquer objeto JS;
    - Inserir em lista;
    - Receber como parâmetro da função;
    - Serve como valor de retorno de função.
- Além disso, se pode colocar código JS dentro do código HTML
- Código JS dentro do HTML vai dentro de {}

O código anterior após o transpiler se tornará:
```
    const element = React.createElement(
        "h1", 
        { className: "title" },
        "Hello World!"
    )
```
Com esse código preparamos nosso elemento para ser exibido no DOM.

- Ao contrário do passado, em vez de colocar JavaScript em HTML, o JSX nos permite colocar HTML em JavaScript.

Vantagens do JSX:
- Similaridade com o HTML
- Melhor integração entre o HTML e o Js

Quem utiliza o JSX?
- Preact, Inferno, React-Native, Vuejs (Opcional)

### DOM - Document Objet Model
- É um objeto/interface criado pelo Browser que representa a estrutura do nosso documento HTML e que nos dá meios para interagir com ele (usamos em geral o JavaScript para fazer isso).

```
    var myBtn = document.getElementById('btn');

    myBtn.addEventListener(
        'click', 
        function(event){
            alert('botão pressionado');
        }, 
        false
    );
```

### Virtual DOM
- É uma representação em JavaScript do DOM verdadeiro. Quando alterações e eventos acontecem, primeiro o React atualiza o Virtual DOM, analisa as mudanças e o que precisa ser atualizado no DOM, e depois realiza isso conciliando o Virtual DOM e o DOM.
- É uma cópia virtual do DOM onde fazemos todas as nossas alterações na interface. O React então compara o DOM virtual com o DOM real e renderiza novamente todas as partes que mudaram.

#### Porque o React usa o Virtual DOM?
- Acessar o DOM é mais lento que as operações em JavaScript
- O Virtual DOM automaticamente encontra a maneira mais economica de atualizar o DOM (atualizando só os elementos necessários)

### Entendendo os elementos
- Os menores elementos do React são os elements, através deles é que descrevemos o que vai aparecer na nossa tela.
```
    const element = <h1>Hello, world</h1>;
```
- Diferente dos elementos DOM, os elementos do React são objetos simples e "baratos" de usar.
- O Virtual DOM é responsável por atualizar o DOM E exibir esses elementos na tela
- Para renderizar um elemento, primeiro escolhemos um nó do DOM, exemplo:
```
    <div id="root"></div>
```
- Tudo dentroo desse nó será atualizado pelo Virtual DOM
- Agora para inserirmos nosso elemento na tela, podemos rodar:
``` 
    const element = <h1>Hello, it's me...</h1>;
    RectDOM.render(element, document.getElementById('root'));
```

### Entendendo as Props (proriedades) e funções puras

#### Uma função pura

```
    function sum(a,b){
        return a+b;
    }
```

- A função recebe duas propriedades a e b
- A função não altera o valor das entradas
- Sempre retorna o mesmo resultado para os mesmos tipos de entradas

#### Uma função impura
```
    function withdraw(account, amount){
        account.total -= amount;
    }
```

- A função altera o valor da sua entrada

**Única regra estrita do React:** Todos os components React tem que agir como funções puras em relação aos seus props.

[Create React App](https://github.com/facebook/create-react-app?_gl=1*cf0g3c*_ga*MjgxODkzNjkyLjE2Nzg3NDgxNDA.*_ga_37GXT4VGQK*MTY3ODk2MTA2OS4xMS4xLjE2Nzg5NjQ0MzQuMC4wLjA.)

### Conhecendo o Vite
- É uma bibliotexa que nos ajuda com o processo de *build* de aplicações web
- É composto de duas partes principais:
    - Um servidor de desenvolvimento que trabalha com ESM para fornecer Hot Module Replacement (HMR)
    - Um empacotador (Rollup) que já vem pré-configurado para gerar assets otimizados para produção
- Cumpre um papel semelhante ao do webpack, porém é a solução mais recomendada atualmente: ele é mais rápido e mais simples
- Criar um novo projeto com Vite é extremamente simples, basta executar: npm create vite@latest

### State
- State é um objeto JavaScript que guarda os dados de um component e determina seu comportamento.
- Quando um estado é atualiazado o component é re-renderizado.

#### Diferenças entre Props e State
- As Props "vem de fora", o State é mais interno

#### Component de classe vs Component funcional
``` 
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }
```

Para manipular um component em um component de classe
``` 
    incrementCount(){
        this.setState(state) => {
            return { count: state.count + 1}
        }
    }
    // setCount(count + 1)
```

Para manipular um component em um component de funcional
```
    import React, { useState } from 'react';

    const [count, setCount] = useState(0);
```
### Cada componente React tem um Ciclo de Vida
Você pode monitorá-los ou manipulá-los durante 3 fases:
-  Mounting: quando um elemento é colocado no DOM
- Updating: quando um componente é atualizado (ocorre sempre que ocorre uma mudança no estado ou propriedade de um componente)
- Unmounting: quando um componente é removido do DOM

[React Lifecycle](​https://www.w3schools.com/react/react_lifecycle.asp) | 
[State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)


### Fetch

```
fetch("https://api.github.com/users/annajuliabreu")
.then(
    (response)=>{
        console.log(response)
    }
)

fetch("https://api.github.com/users/annajuliabreu")
.then(
    (response)=>{
        console.log(response.json())
    }
)

fetch("https://api.github.com/users/annajuliabreu")
.then(
    (response)=>{
//         console.log(response.json())
           return response.json()
    }
)

fetch("https://api.github.com/users/annajuliabreu")
.then(
    (response)=>{
//         console.log(response.json())
           return response.json()
    }
)
.then(
    (data)=>{
        console.log(data)
    }
)

V1
fetch("https://api.github.com/users/annajuliabreu")
.then(
    (response)=>{
//         console.log(response.json())
           return response.json()
    }
)
.then(
    (data)=>{
        console.log(data.company)
    }
)

V2
function acessarAPI(){
    const response = 
    fetch("https://api.github.com/users/annajuliabreu")    
}

V3
function acessarAPI(){
    const response = 
        fetch("https://api.github.com/users/annajuliabreu") 
            console.log(response)
}

acessarAPI()

V3
async function acessarAPI(){
    const response = await fetch("https://api.github.com/users/annajuliabreu") 
    console.log(response)
}

acessarAPI()

async function acessarAPI(){
    const response = await 
    fetch("https://api.github.com/users/annajuliabreu") 
    console.log("response:"+ response)
}

async function acessarAPI(){
    const response = await fetch("https://api.github.com/users/annajuliabreu") 
    const jsonResposta = response.json()
    console.log(jsonResposta)


async function acessarAPI(){
    const response = await fetch("https://api.github.com/users/annajuliabreu") 
    const jsonResposta = response.json()
    console.log("response: "+jsonResposta)
}

V4
async function acessarAPI(){
    const response = await fetch("https://api.github.com/users/annajuliabreu") 
    const jsonResposta = await response.json()
    console.log(jsonResposta)
}

V5
async function acessarAPI(){
    const response = await fetch("https://api.github.com/users/annajuliabreu") 
    const jsonResposta = await response.json()
    console.log("company: " + jsonResposta.company)
}

V6  
async function acessarAPI(){
    const response = await fetch("https://api.github.com/users/annajuliabreu") 
    const jsonResposta = response.json()
    jsonResposta
    .then(
        (data)=>{
        console.log(data)
        }
    )
//     console.log("company: " + jsonResposta.company)
}}




```