import { createSlice } from "@reduxjs/toolkit";
;

const initialState = {
    active: 1,
    themeState: true
}

const activeSlice = createSlice({
    name: 'active',
    initialState,
    reducers: {
       setActive:(state, { payload })=>{
        state.active = payload
       },
       setTheme:(state)=>{
        state.themeState = !state.themeState
       },

    }
})
export const {setActive} =activeSlice.actions
export const {setTheme} =activeSlice.actions
export default activeSlice.reducer