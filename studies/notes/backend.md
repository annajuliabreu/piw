### Servidor Back-end
- Implementa regras da aplicação
- Recebe requisições e envia resposta
- Faz aceso a dados do BD
- Arquitetura Cliente-Servidor

![Aplicação MERN](https://i.imgur.com/Cxd49OJ.png)

Aplicação MERN (MongoDB, ExpressJS, ReactJS, NodeJS)


### Node.js
- Plataforma que permite execução de códigos JS fora do navegador
- Powered by V8 Chrome Engine
    - Implementado em C++
        - Hoje, JS no V8 é mais rápido que Python no CPython
    - JIT (Just In Time) compiler
- Baixa impedância com outras tecnologias
    - React (JavaScript)
    - MongoDB (JSON + JS)

#### package.json
- Arquivo de configuração de um projeto Node.js
- Contém nome, versão, endereço git, dependências, formato JSON, scripts de operação

### Sistema de imports

#### Exportando Módulo - Padrão CommonJS
``` 
// main.js
    function somar(a, b){
        return a+b;
    }

    let s = "string a ser exportada";

    let o = {"nome":"anna", "matricula":"123"};

    module.exports.somar = somar;
    module.exports.s = s;
    module.exports.o = o;

// novo_modulo.js
    const newmodule = require('./newmodule');

    console.log("Hello World!");
    console.log(newmodule);
    console.log(newmodule.somar(2,3));
    console.log(newmodule.s);
    console.log(newmodule.o)
```
module.exports é a variável que contém tudo o que o módulo exporta
require() importa tudo o que foi exportado de um módulo em outro arquivo

## Servidor

#### Espress.js
- Framework para facilitar criação de rotas, templates e verbos HTTP
- Middleware
    - Excecutar qualquer código
    - Fazer mudanças nos objetos de solicitação e resposta
    - Encerrar o ciclo de solicitação-resposta
    - Chamar a próxima função de middleware na planilha

#### Criar arquivo de Configuração Express
```
// config/express.js
    // Importando módulo express (Padrão CommomJS)
    const express = require('express');

    // Exportando módulo (Padrão CommomJS)
    module.exports = function(){
        let app = express();
        // Definindo variável da aplicação
        app.set("port", 8393);
        return app;
    }
```

#### Hospedando uma página web
```
// config/express.js
    const express = require('express');

    module.exports = function(){
        let app = express();
        app.set("port", 8393);
        app.use(express.static('./public'));
        return app;
    }
```
Middleware express.static serve páginas estáticas na pasta "./public"

## JSON 
- JSON é uma estrutura de dados derivada da notação de objetos do JS

**Sintaxe**
    - Os dados estão dispostos em pares/valor
    - Os dados são separados por vírgula ,
    - Objetos são colocados em chaves {}
    - Listas são colocadas em colchetes []

**Exemplos de JSON**

- Exemplo par nome/valor: "firstName":"Anna"
    - Nomes JSON requerem aspas dupalas
    - Valores JSON podem ser números, strings, booleanos, listas, objetos ou null

- Exemplo objetos: 
    ``` 
    {"firstName":"Anna", "lastName":"Abreu"}
    ```

- Exemplo lista:
    ```
    [
        {"firstName":"Anna", "lastName":"Abreu"},
        {"firstName":"Léo", "lastName":"Abreu"}
        {"firstName":"Biel", "lastName":"Abreu"}
    ]
    ```

## Protocolo HTTP

### Arquitetura Cliente-Servidor
![Arquitetura Cliente-Servidor](https://1907153667-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MVRn4REfCrgOC5oEZbZ%2Fuploads%2FxKPSHwlrhgIViZugpKcS%2Fsite-estatico.png?alt=media&token=3f3d0691-97e2-424d-84f7-d8e1b62cbadf)

### Endereço IP e Portas
Endereço IP
- Identifica um host na rede
- Cada interface de rede tem um IP, ex. 200.21.32.43
- URLs são traduzidos em IP usando DNS (globo.com.br > 186.192.90.5)

Portas
- Identificam os processos de origem e fim
- Permite a comunicação de diversas aplicações na mesma máquina
- Cada aplicação recebe e envia requisições por um porta, ex. Servidor Web, por padrão, recebem requisiçÕes na porta 80

### Protocolo HTTP
Hypertext Transfer Protocol (HTTP) ou Protocolo de Transferência de Hipertexto
Protocolo usado para transferir dados na WEB
Funcionamento
    - O cliente (navegador/mobile/desktop/iot) envia uma requisição HTTP para o servidor
    - O servidor envia uma resposta HTTP ao cliente

## Composição da Requisição HTTP:

### Mensagens do HTTP
**O que é uma requisição?** 

A requisição (request) é o pedido que o cliente envia ao servidor. Nessa mensagem, há dados específicos, que descrevem o que foi solicitado. Os principais componentes de uma requisição são:
1. O método - indica a ação que o cliente deseja realizar.
2. O caminho - a URI (Uniform Resource Identifier) do recurso a ser buscado.
3. A versão HTTP do protocolo.
4. Os headers (cabeçalhos) - contêm informações adicionais para os servidores.
5. O request body (corpo de dados) - é opcional e necessário para alguns métodos, como o POST, e contém o recurso requisitado.

![Request](https://www.azion.com/static/images/uploads/http-request-body-pt.png)

#### Métodos de Requisição
O método indica a ação que o cliente deseja realizar, tais como:

- GET: para obter recursos ou recuperar dados do servidor; solicita algum recurso.
    - Dados são anexados à URL, ficando visíveis ao usuário.
- POST: para enviar dados ao servidor, como a submissão de um formulário, ou seja, inserir dados.
    - Dados são incluídos no corpo do comando.
- DELETE: para excluir documentos dentro do servidor, ou seja, exclui o recurso;
- PUT: para enviar arquivos para o servidor ou fazer uma atualização total de um recurso;
    - Em geral, é usaod para modificar ou atualizar dados
- HEAD: para apenas retomar a linha e os cabeçalhos de resposta. Variação do GET em que o recurso não é retornado.
    - Usado para obter metadados por meio do cabeçalhoo da resposta, sem ter que recuperar todo o conteúdo.
- PATCH: para fazer a atualização parcial de um recurso;
- OPTIONS: para fazer uma consulta de quais comandos estão disponíveis para um determinado usuário;
- TRACE: para depurar as requisições, devolvendo o cabeçalho de um documento.

**O que é uma resposta?**

A resposta (response) dada pelo servidor contém as informações solicitadas pelo cliente ou informa que houve algum erro em relação ao que foi pedido. Ela contém:
1. O response header - contém a versão do protocolo, o código de status da requisição e o tipo de conteúdo que está incluído no corpo.
2. O código do status - indica se a requisição foi bem sucedida ou não. É formado por três dígitos e o primeiro dígito representa a classe a qual o status pertence. A resposta é dada por códigos específicos e alguns deles são:
    200 - a requisição foi respondida com sucesso; (2xx: Sucesso)
    301 - a requisição mudou permanentemente; (3xx: Reredicionamento)
    401 - a requisição não foi autorizada pelo servidor; (4xx: Erro no cliente)
    404 - a requisição não foi encontrada pelo servidor;
    500 - erro interno no servidor. (5xx: Erro no server)
3. O response body - assim como na requisição, é opcional e contém dados sobre o recurso requisitado.

![Response](https://www.azion.com/static/images/uploads/http-response-body-pt.png)

### Padrão REST
Respresentational State Transfer (REST)
    - Abstração de arquiteturas de um componente
    - Define forma de se consumir um dado recurso
    - Ignora implementação do componente
    - Foca na sintae de comunicação do componente
Usa protocolo HTTP
    - Usa métodos/verbo (GET/POST/PUT...) para indicar uma ação
Podemos usar JSON como formato de dados

**Verbos:**

- GET: Recuperar itens
- POST: Adicionar item
- PUT: Atualizar item
- DELETE: Deletar item

**URL:**

Exemplo: https://jsonplaceholder.typicode.com/users

- GET/users: busca todos os usuários (retorna a lista de usuarios)
- GET/users/1: busca o usuário com id 1
- POST/users: insere um novo usuário, o novo usuário vai no corpo da requisição
- DELETE/users/1: remove usuário com id 1
- GET/users/1/comments: busca todos os comentários do usuário com id 1
- GET/comments?postId=1: busca todos os usuários cujo o id do post para ele foi feito é 1

### Estrutura de diretórios

```
node_aluno
    app
        controllers: controladores de chamados pelas rotas da aplicação
        models: models que representam o domínio do problema
        routes: rotas da aplicação
        views: views
    config: configuração do express, banco de dados etc
    public: todos os arquivos acessíveis diretamente pelo navegador
```
### Endpoints com Query

- Você pode querer ter critérios ao fazer uma busca, ex. todos os alunos com o IRA maior que 5000
- É possível fazer isso usando parâmetros de query direto na url, no formato chave-valor. 
Exemplos:
https://localhost:8393/api/alunos?min_ira=5000
https://localhost:8393/api/alunos?min_ira=5000&max_ira=7000

--------------------------------

## Introdução a Banco de Dados
Toda aplicação tem dados a serem armazenados. 
Exemplos:
    - Rede social: dados dos usuários, posts
    - Banco: dados dos clientes, contas, investimentos
    - E-commerce: dados de clientes, produtos, cartão de crédito
Como armazenar esses dados?

Histórico:
- Anos 60: surge os sistemas de arquivos; dados podem ser armazenados em arquivos; o dev implementa manualmente a inserção, consulta, modificação e a deleção dos dados todos à mão.
- Anos 70: surge os Sistemas de gerenciamento de banco de dados (SGBD). Codd propôs o modelo de dados relacionais, o Sistema de gerenciamente de Banco de Dados Relacionais (SGBDR)
- Anos 80: SGBDs se difundem em empresas e na comunidade científica. A linguagem SQL (Structured Query Language) se torna padrão para manipulação de dados em SGBDs.
- Anos 90: SGBDs dominantes: DB2 (IBM), SQL Server (Microsoft), Oracle
- Séc 21: Big Data - 5 Vs: velocidade, volume variedade, veracidade e valor. Banco de dados distribuídos (rodam em várias máquinas: SGBDs em nuvem. Aparecimento de novos modelos de dados (NoSQL).

Conceitos básicos: 
- Banco de dados é uma coleção de dados inter-relacionados entre si, representando informações sobre um domínio específico