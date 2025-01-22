import "./todolist.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addTask } from "../Task/taskSlice";
import Tasklist from "../Task List/tasklist";


export default function Todolist() {
   const [taskTitle, setTaskTitle] = useState("")
   const dispatch = useDispatch()

   function handleTask(e) {
      e.preventDefault()
      if (taskTitle.trim()) {
         dispatch(addTask({ title: taskTitle })) 
         setTaskTitle("")
      }
   }
   const tasks = useSelector((state) => state.task)

   return (
      <div className="tobody">
         
         <div className="wrapper">
         <h1>To Do List</h1>
            <input
            className="addInput"
               value={taskTitle}
               type="text"
               placeholder="Add a task"
               onChange={(e) => setTaskTitle(e.target.value)}
            />
            <br />
            <button className="addButton" type="button" onClick={handleTask}>
               Add
            </button>
         </div>
         <Tasklist tasks={tasks} />
      </div>
   )
}
