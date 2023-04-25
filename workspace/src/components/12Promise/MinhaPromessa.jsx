import React, { useEffect } from "react"

function get(url) {
    return new Promise(
        (resolve, reject) => {
            let resposta = { res: false, msg: "" }
            setTimeout(
                () => {
                    const x = 11;
                    if (x % 2 === 0) {
                        resposta = { res: true, msg: "sucesso!" }
                    } else {
                        resposta = { res: false, msg: "algo de errado aconteceu!" }
                    }

                },
                5000
            )

            if (resposta.res) resolve(resposta)
            else reject(resposta)
        }
    )
}

export const MinhaPromessa = () => {
    useEffect(
        () => {
            // console.log("olá")
            get('https://...')
                .then(
                    (response) => console.log(response)
                )
                .catch(
                    (error) => console.log(error)
                )
        }
        ,
        []
    )

    return (
        <>
            <h1>Testando a Promessa!</h1>
        </>
    )
}