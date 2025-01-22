import React from "react";
import "./tasklist.css";
import { useDispatch } from "react-redux";
import { deleteTask, taskDone } from "../Task/taskSlice";
import { FaTrash } from "react-icons/fa";
import { MdDone } from "react-icons/md";

export default function Tasklist({ tasks }) {
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(deleteTask({ id }));
  }
  function handleProg(id) {
    dispatch(taskDone({ id }));
  }

  return (
    <div className="wrapper1">
      <ul className="TaskList">
        {tasks.map((task) => (
          <li className="taskElem" key={task.id}>
            <span
              style={{
                textDecoration: task.done ? "line-through" : "none",
              }}
            >
              {task.title}
            </span>
            <button
              type="button"
              className="deleteButton"
              onClick={() => handleDelete(task.id)}
              data-label="Delete"
            >
              <FaTrash className="svgIcon" />
            </button>
            <button
              type="button"
              className="doneButton"
              onClick={() => handleProg(task.id)}
              data-label="Done"
            >
              <MdDone className="svgIcon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
