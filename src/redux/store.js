import { configureStore } from "@reduxjs/toolkit"; //to configure store
import counterSlice from "./counterSlice";

    
export const store = configureStore({
    // reducer can only update value of state in store
    // reducer key is predefine (its an object which can hold more than one reducer)

    

        // to create Action file: create Action()
        // create reducer file: create Reducer() use if creating in separate file
        // in this, this is not a separate file its the dlice
        reducer:{
            // reducer is coming from counterSlice since we are export reducer as export default
            counter:counterSlice
        }
    
})