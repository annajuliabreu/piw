let pessoa = {
    nome: "Anna",
    sobrenome: "Abreu"
}

console.log(pessoa.nome);
console.log(pessoa.sobrenome);
pessoa.nome = "Julia";
console.log(pessoa.nome);

let nome = "Skipe";
let idade = "12";

let cachorro = {
    nome: nome,
    idade: idade
}

console.log(cachorro.nome);

let crd = "321"
let phone = "123"
let email = "anna@email.com"

let designer = {crd, phone, email};

console.log(designer.email);
console.log(designer.crd);

let carro = {
    modelo: "Jeep Compass",
    ano: "2023",
    versao: "Longitude",
    carroceria: "SUV"
}

let modelo = carro.modelo;
let ano = carro.ano;

let {versao, carroceria} = carro;//desconstrutor de objeto

console.log(carro.modelo);
console.log(carro.ano);
console.log(versao, carroceria);