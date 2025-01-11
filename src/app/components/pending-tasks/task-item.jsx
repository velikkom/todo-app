import React from "react";
import TaskText from "./task-text";
import CompleteButton from "./completed-button";
import DeleteButton from "./delete-button";

export default function TaskItem({ task, onToggleTask, onDeleteTask }) {
  console.log("Task: ", task); // Gelen task nesnesini logla

  if (!task) {
    console.error("Task is undefined!");
    return null; // Task yoksa null döndür
  }

  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center task-item ${
        task.completed ? "completed" : ""
      }`}
    >
      <TaskText
        text={task.text || "No task"}
        completed={task.completed || false}
      />
      <div className="task-actions d-flex">
        {!task.completed && (
          <CompleteButton onClick={() => onToggleTask(task.id)} />
        )}
        {!task.completed && (
          <DeleteButton onClick={() => onDeleteTask(task.id)} />
        )}
      </div>
    </li>
  );
}
