import React from "react";
import TaskList from "../task-list/task-list";
import "../../../styles/components/pending-tasks/_task-list.scss";

export default function CompletedTasks({ tasks, onDeleteTask }) {
    const completedTasks = tasks.filter((task) => task.completed);

    return (
        <div className="completed-tasks mt-4">
            <h2>Done - {completedTasks.length}</h2>
            <TaskList tasks={completedTasks} onDeleteTask={onDeleteTask} />
        </div>
    );
}
