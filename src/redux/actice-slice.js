import { createSlice } from "@reduxjs/toolkit";
;

const initialState = {
    active: 1
}

const authSlice = createSlice({
    name: 'active',
    initialState,
    extraReducers: {
       setActive:(state, { payload })=>{
        state.active = payload
       }
    }
})

export default authSlice.reducer