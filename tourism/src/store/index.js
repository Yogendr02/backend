import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { Stateapi } from "../Api/Stateapi";
import {Searchreducer,changesearchterm} from "./Searchslice"  
const store = configureStore({
    reducer: {
        seval: Searchreducer,
        [Stateapi.reducerPath]: Stateapi.reducer //put name just as reducerpath= albumsapi.reducerpath
    },
    middleware: (getDefaultMiddleware)=>{
        return getDefaultMiddleware()
        .concat(Stateapi.middleware)
    }
});

setupListeners(store.dispatch)//this all middleware,reducer and listeners help to connect 

export { useFetchstatesQuery } from '../Api/Stateapi'
export { store,changesearchterm}