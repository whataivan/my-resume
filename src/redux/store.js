
import rootReducer from '../redux/actice-slice'
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist'
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
const { configureStore } = require("@reduxjs/toolkit");
const persistConfig = {
   key: 'theme',
  blacklist: 'active',
   storage,
 }


export const store = configureStore({
   reducer: {
      active:persistReducer(persistConfig, rootReducer),
      
      middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        },
    })
   }
})
export const persistor = persistStore(store);