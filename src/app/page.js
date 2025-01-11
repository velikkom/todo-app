"use client";

import { useState } from "react";
import { Container } from "react-bootstrap";
import AddTaskForm from "./components/add-task-forms/add-task-form";
import PendingTasks from "./components/pending-tasks/pending-tasks";
import CompletedTasks from "./components/completed-tasks/completed-tasks";

import "./globals.css";

export default function HomePage() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <Container className="container">
      <div className="add-task-section">
        <AddTaskForm onAddTask={addTask} />
      </div>
      <div className="pending-tasks-section">        
        <PendingTasks
          tasks={pendingTasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
      </div>
      <div className="completed-tasks-section">       
        <CompletedTasks tasks={completedTasks} />
      </div>
    </Container>
  );
}
