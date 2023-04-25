import { useDispatch } from "react-redux";
import { incrementar } from "./id/idSlice";
import React from 'react';


const BotaoIncrementar = () => {
    const despachante = useDispatch()
    return (
        <>
        <button onClick={()=>despachante(incrementar())}>
            id + 1
        </button>
        </>
    )
}

export default BotaoIncrementar;