import { Fragment } from "react";
import { Navegador } from "../../commom/Navegador/Navegador";

function Conteudo(){
    // let redes = "Behance, Instagram e VSCO"
    let linkBehance = (<a href="https://be.net/">Behance</a>)
    let linkInsta = (<a href="https://instagram.com">Instagram</a>)
    let linkVsco = (<a href="https://vsco.co">VSCO</a>)

    return(
        <div>
                <h2>O que é uma rede social?</h2>
                <p>Rede social é uma estrutura social composta por pessoas ou organizações,
                    conectadas por um ou vários tipos de relações, que compartilham valores e
                    objetivos comuns.<a href="http://https://pt.wikipedia.org/wiki/Rede_social">Wikipédia</a></p>

                <h3>Quantas redes sociais eu possuo?</h3>
                <p>Possuo {1 + 2}</p>

                <h4>Quais são elas?</h4>
                {/* <p>{redes}</p> */}
                <p>{linkBehance}</p>
                <p>{linkInsta}</p>
                <p>{linkVsco}</p>
            </div>
    )
}

function Cabecalho({paginaAtual}){
    return(
        <header>
            <h1>Matrícula UFC QXD</h1>
            <span>Você está na {paginaAtual}</span>
        </header>
    )
}

export function PaginaPrincipal() {
    return (
        <Fragment>
            <Cabecalho paginaAtual="pagina de matrícula"/> <br/>
            <Navegador />
            <Conteudo />
        </Fragment>
    )
}