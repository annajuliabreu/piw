import { createSlice } from "@reduxjs/toolkit";

const inicialState = {
    value: 40
}

export const idSlice = createSlice({
    name: "id",
    inicialState: inicialState,
    reducers: {
        incrementar: (state) => { state.value = state.value + 1 },
        decrementar: (state) => { state.value = state.value - 1 },
    }
})

export const { incrementar, decrementar } = idSlice.actions;
export default idSlice.reducer;