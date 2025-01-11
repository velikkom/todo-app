import React from "react";
import TaskItem from "./task-item/task-item";
import "../../../styles/components/pending-tasks/_task-list.scss";

export default function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <ul className="task-list mt-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
}
