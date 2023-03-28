import React, { Fragment, Children, cloneElement } from "react";


const Hero = ({ name, nomeDaArena }) => {
    return (
        <Fragment>
            <h1>Sou o herói e estou lutando na arena {nomeDaArena}</h1>
            <h3>{name}</h3>
            <img src="https://sm.ign.com/ign_br/news/s/suicide-sq/suicide-squad-2-rumored-to-be-ben-afflecks-final-appearance_kz22.jpg" alt="Hero" style={{ width: "300px" }} />
        </Fragment>
    )
}

const Enemy = ({ name, nomeDaArena }) => {
    return (
        <Fragment>
            <h1>Sou o inimigo e estou lutando na arena {nomeDaArena}</h1>
            <h3>{name}</h3>
            <img src="https://i.blogs.es/43f760/henry-cavill-superman-e1564057578268/1366_2000.jpeg" alt="Enemy" style={{ width: "300px" }} />
        </Fragment>
    )
}

const Arena = ({ arena, children }) => {
    return (
        <Fragment>
            {Children.map(children, (child) =>{return cloneElement(child, {nomeDaArena:arena})})}

            {/* <h1> Arena {arena} </h1> */}
            {/* {children} */}
            {/* <Hero name="Batman" />
            <Enemy name="Superman" /> */}
        </Fragment>
    )
}

const World = ({ children }) => {
    return (
        <Fragment>
            {children}
            {/* <Arena arena="Arena Coliseu em Roma/Itália"/> */}
        </Fragment>
    )
}

export { Hero, Enemy, Arena, World };