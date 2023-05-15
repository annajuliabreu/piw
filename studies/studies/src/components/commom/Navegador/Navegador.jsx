import "./Navegador.css"

export function Navegador(){
    // let Botao = (props) => (<a className="link-navegador" href="https://instagram.com/ddmais.ufc">{props.linkTexto}</a>);

    return(
        <nav className="nav">
            <div className="div-right">
                <a href="https://instagram.com/ddmais.ufc"><img className="img" src="../logo.svg" alt="" /></a>
                <a className="botao-home" href="https://instagram.com/ddmais.ufc">Home</a>
                <a className="botao-explorar" href="https://instagram.com/ddmais.ufc">Explorar</a>
            </div>
           
           <div className="div-left">
                <a className="botao-login" href="https://instagram.com/ddmais.ufc">Login</a>
                <a className="botao-cadastrar" href="https://instagram.com/ddmais.ufc">Criar conta</a>
           </div>
        </nav>
    )
}