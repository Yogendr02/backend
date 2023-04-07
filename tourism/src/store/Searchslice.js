import {createSlice} from "@reduxjs/toolkit"

const Searchslice = createSlice({
    name: "sir",
    initialState: {
        Searchterm: 'Search'
    },
    reducers: {
        changesearchterm(state,action){
            state.Searchterm = action.payload;
        }
    }
})

export const {changesearchterm} = Searchslice.actions;
export const Searchreducer = Searchslice.reducer;