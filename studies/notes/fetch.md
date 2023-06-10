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