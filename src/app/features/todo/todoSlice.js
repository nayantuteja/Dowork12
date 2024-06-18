import { createSlice, nanoid } from "@reduxjs/toolkit";  //importing createslice from redux toolkit and nanoid is used to genrate unique id

const initialState = {                        //giving intitial state that takes objest and will give initial value
    todos : []
}

export const todoSlice = createSlice({   //slice is a bigger function of reducer, creating slice, and in this method object will be stored
   name :'todo',
   initialState,
   reducers:{                            //reducers is a function it stores propetis and function // we will get 2 things state and action and will have access of them all the time,  //state will give the access to the intial state and will give the values that are there in the state //action used to give the id to the removeTodo 
    addTodo: (state, action) => {
        const todo={
            id: nanoid(),
            name: action.payload.name, 
            number: action.payload.number,//the text will be fetch for action from payload (payload is an object)
            address: action.payload.address,
            pincode: action.payload.pincode,
            text: action.payload.text,
        }
        state.todos.push(todo)  //taking access from state udhar se todo lene as we have initializse todo there and then pushing the value in todo

    },    
    removeTodo: (state,action) => {
   state.todos = state.todos.filter((todo)=> todo.id !== action.payload );

    }
   }

});

export const{addTodo,removeTodo} = todoSlice.actions
export default todoSlice.reducer

