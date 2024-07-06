import {createContext, useContext} from 'react'

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            task:"Task 1",
            completed:false,
        }
    ],
    addTask: (task)=>{},
    updateTask:(id,task)=>{},
    deleteTask:(id)=>{},
    toggleCompleted:(id)=>{},
})

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const  TodoContextProvider = TodoContext.Provider