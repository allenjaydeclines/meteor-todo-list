import React from "react";

export const Task = ({ task, onCheckBoxClick, onDeleteClick }) => {
  return (
    <li className="task-list">
      <input
        type="checkbox"
        readOnly
        checked={task.isChecked}
        onClick={() => onCheckBoxClick(task)}
      />
      <span>{task.text}</span>
      <button className="delete-button" onClick={() => onDeleteClick(task._id)}>
        &times;
      </button>
    </li>
  );
};
