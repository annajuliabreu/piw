# PIW 2023.1
Repositório da disciplina de Projeto de Interface Web

##### Referência de escrita: [Sintaxe básica de gravação e formatação no GitHub](https://docs.github.com/pt/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
## Aula 1 - Apresentação da Disciplina, ambiente de trabalho (VSCode e CodeSandBox), primeiros programas

### O que é React?
React é "uma biblioteca JavaScript declarativa, eficiente e flexível para a criação de interfaces de usuário (UI)"
- Surgiu em 2011 no Facebook
- Características: É uma Biblioteca e não é um framework; é baseado em Components (pequenos blocos, como um Lego); é usado para criar SPA (Single Page Application).
- O React é feito com JavaScript
- O React é eficiente (Virtual DOM)
- O React pode ser utilizado para criar Apps Mobile com o React Native
- O React é a biblioteca de criação de interfaces mais popular e é utilizado em grandes empresas: Facebook, Instagram, WhatsApp, Netflix, Dropbox...

### **Components** - O que são components e porque eles são importantes?
- O React é uma biblioteca baseada no conceito de components.
- Os components permitem dividir a Interface do Usuário em partes independentes e reutilizáveis.
- "É um pequeno pedaço isolável da tela reaproveitável, usá-los para compor telas."

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
- JSX serve para descrever como a nossa USer Interface (UI) deve ser.
- JSX não é interpretado pelo browser, por este motivo devemos utilizar um transpiler (em geral babel) para realizar essa transpilação.

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
## Aula 2 - Funções internas

## Aula 3 - Props
