// src/components/AddTaskForm.js
"use client";

import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../../../styles/components/add-task/_add-task-form.scss";

export default function AddTaskForm({ onAddTask }) {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      onAddTask(newTask);
      setNewTask("");
    }
  };

  return (
    <div className="add-task-form-container ">
    <Form onSubmit={handleSubmit} className="add-task-form">
      <Form.Group className="d-flex">
        <Form.Control
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button type="submit" variant="primary" className="ms-2">
         <i className="bi bi-plus"></i>
        </Button>
      </Form.Group>
    </Form>
    </div>
  );
}
