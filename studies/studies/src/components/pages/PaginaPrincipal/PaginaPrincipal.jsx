import { Fragment } from "react";
import { Navegador } from "../../commom/Navegador/Navegador";
import { Galeria } from "../../commom/Galeria/Galeria"

export function PaginaPrincipal() {
    return (
        <Fragment>
            <Navegador />
            <Galeria />
        </Fragment>
    )
}