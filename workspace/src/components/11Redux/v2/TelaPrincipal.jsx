import Imagem from "./Imagem";
import BotaoIncrementar from "./BotaoIncrementar";
import BotaoDecrementar from "./BotaoDecrementar";
import React from 'react';

const TelaPrincipal = () => {


    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td colSpan={2}>
                            <Imagem />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <BotaoIncrementar />
                        </td>
                    </tr>

                    <tr>
                        <BotaoDecrementar />
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default TelaPrincipal;