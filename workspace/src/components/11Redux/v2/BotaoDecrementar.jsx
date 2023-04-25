import { useDispatch } from "react-redux";
import { decrementar } from "./id/idSlice";
import React from 'react';


const BotaoDecrementar = () => {
    const despachante = useDispatch()

    return (
        <>
            <button onClick={()=>despachante(decrementar())}> 
                id - 1
            </button>
        </>
    )
}

export default BotaoDecrementar;