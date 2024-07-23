import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faCommentSms } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({
  task,
  deleteTodo,
  editTodo,
  sendAsText,
  toggleComplete,
}) => {
  return (
    <div className="Todo">
      <p
        className={`${task.completed ? "completed" : "incompleted"}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          className="edit-icon"
          title="Edit Task"
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon
          className="delete-icon"
          title="Delete Task"
          icon={faTrashCan}
          onClick={() => deleteTodo(task.id)}
        />
        <FontAwesomeIcon
          className="comment-icon"
          title="Send SMS"
          icon={faCommentSms}
          onClick={() => sendAsText(task.id)}
        />
      </div>
    </div>
  );
};
