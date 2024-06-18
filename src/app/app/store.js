import { configureStore } from "@reduxjs/toolkit";  // importing configureStore form redux toolkit its from the core reduz not react redux
import todoReducer from '../features/todo/todoSlice'; 

export const store = configureStore({  // exporting variable store it will come from configure store and will take object

    reducer : todoReducer
})  