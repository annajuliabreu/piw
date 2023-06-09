import Imagem from "./Imagem";
import BotaoIncrementar from "./BotaoIncrementar";
import BotaoDecrementar from "./BotaoDecrementar";
import { useState } from "react";

const TelaPrincipal = () => {

    const [id, setId] = useState(100);

    const incrementar = () => {
        setId((prev)=>prev+1)
    }

    const decrementar = () => {
        setId((prev)=>prev-1)
    }

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td colSpan={2}>
                            <Imagem id={id}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <BotaoIncrementar incrementar={incrementar} />
                        </td>
                    </tr>

                    <tr>
                        <BotaoDecrementar decrementar={decrementar} />
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default TelaPrincipal;