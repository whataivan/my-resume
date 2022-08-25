import { createSlice } from "@reduxjs/toolkit";
;

const initialState = {
    active: 1
}

const activeSlice = createSlice({
    name: 'active',
    initialState,
    reducers: {
       setActive:(state, { payload })=>{
        state.active = payload
       }
    }
})
export const {setActive} =activeSlice.actions
export default activeSlice.reducer