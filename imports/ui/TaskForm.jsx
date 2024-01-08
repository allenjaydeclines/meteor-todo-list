import React, { useState } from "react";
import { Meteor } from "meteor/meteor";

export const TaskForm = ({ user }) => {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!text) return;

    Meteor.call("tasks.insert", text);
    setText("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add your new task"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <button type="submit">Add Task</button>
    </form>
  );
};
