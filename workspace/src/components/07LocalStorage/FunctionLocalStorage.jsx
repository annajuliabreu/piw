import React from "react"

const SaveData = () => {
    const saveData = () => {
        // cria um obj e salva 
        const aluno = { nome: "Anna", curso: "DD" }
        // stringuinfica
        localStorage.setItem("aluno01", JSON.stringify(aluno));
        sessionStorage.setItem("disciplina", "PIW");
    }

    return (
        <div>
            <h1>Saving Data...</h1>
            {saveData()}
            <LoadData />
        </div>
    )
}

const LoadData = () => {
    const loadData = () => {
        // objetifica
        const alunoCarregado = JSON.parse(localStorage.getItem("aluno01"));
        return (
            <>
                <h3>
                    Nome: {alunoCarregado.nome}
                </h3>
                <h3>
                    Curso: {alunoCarregado.curso}
                </h3>
            </>
        )
    }

    return (
        <>
            <h1>Loading Data...</h1>
            {loadData()}
        </>
    )
}

export default SaveData;