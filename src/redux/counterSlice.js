import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name:"counterApp", //no nb for this name
    initialState:{
        value:0  //initial value
    },
    // actions are created inside this reducers key as object
    reducers:{
         // logics to update state
         
        //  function to increment number
         increment:(state, action)=>{
            // if its an argument function then it can only be accessed by action and value in payload
            state.value += action.payload
         },
        //  function to decrement number
         decrement:(state, action)=>{
            // if its an argument function then it can only be accessed by action and value in payload
            state.value -= action.payload
        },
        // function to reset
        reset:(state)=>{
            state.value=0
        }


    }
})

// action is required by component inorder to update state
export const{increment,decrement,reset} = counterSlice.actions

//reducer is required to store to change the state value
export default counterSlice.reducer 

// createSlice: A function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.  The reducer argument is passed to createReducer().



