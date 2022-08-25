
import rootReducer from '../redux/actice-slice'

const { configureStore } = require("@reduxjs/toolkit");



export const store = configureStore({
    reducer: {
       active: rootReducer,
       
    }
    })
