import React from "react";
import "../../../styles/components/add-task-forms/_task-input.scss";

export default function TaskInput({ value, onChange, placeholder }) {
    return (
        <input
            type="text"
            className="task-input"
            value={value}
            onChange={onChange}
            placeholder={placeholder || "Add a new task"}
        />
    );
}
