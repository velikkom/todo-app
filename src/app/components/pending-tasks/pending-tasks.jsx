import React from "react";

import "../../../styles/components/pending-tasks/_pending-task.scss";
import TaskList from "../task-list/task-list";
isFinite

export default function PendingTasks({ tasks, onToggleTask, onDeleteTask }) {
  const pendingTasks = tasks.filter((task) => !task.completed);

  return (
    <div className="pending-tasks mt-4">
      <h2>Tasks to do - {pendingTasks.length}</h2>
      <TaskList
        tasks={pendingTasks}
        onToggleTask={onToggleTask}
        onDeleteTask={onDeleteTask}
      />
    </div>
  );
}
