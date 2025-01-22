import { createSlice } from "@reduxjs/toolkit"
const initialState = [
   
          
]
const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers:{
        addTask:(state, action)=>{
            const newTask ={
                id: Date.now(),
                title: action.payload.title,
                done:false
            }
            state.push(newTask)
        },
        deleteTask:(state,action)=>{
            const deletedTask = action.payload.id
            return state.filter((task)=>task.id!==deletedTask)
            },
        taskDone:(state,action)=>{
            const taskProg = action.payload.id
            const task = state.find((task)=>task.id==taskProg)
            if(task){
                task.done = true
            }

        }
        }
        
        

})
export const {addTask, deleteTask, taskDone} = taskSlice.actions
export default taskSlice.reducer