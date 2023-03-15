# PIW 2023.1
Repositório da disciplina de Projeto de Interface Web

Cronograma: 
## Aula 1 - Apresentação da Disciplina, ambiente de trabalho (VSCode e CodeSandBox), primeiros programas

## O que é React
React é "uma biblioteca JavaScript declarativa, eficiente e flexível para a criação de interfaces de usuário (UI)"

- Surgiu em 2011 no Facebook

- Características: É uma Biblioteca e não é um framework; é baseado em Components (pequenos blocos, como um Lego); é usado para criar SPA (Single Page Application).
- O React é feito com JavaScript
## **Components** - O que são components e porque eles são importantes?
- O React é uma biblioteca baseada no conceito de components.
- Os components permitem dividir a Interface do Usuário em partes independentes e reutilizáveis.
-"É um pequeno pedaço isolável da tela reaproveitável, usá-los para compor telas "

São como funções JavaScript
- Aceitam entradas arbitrárias (chamadas **props**)
- Retorna Elementos React

Dois tipos de Componentes: Função e Classe (features extras)

Exemplo de como é definido um componente de função:
```
function Welcome(props){
    return <h1>Hello, {props.name}</h1>;
}
```

## Aula 2 - Funções internas

## Aula 3 - Props

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