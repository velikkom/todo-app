import React from "react";

export default function TaskText({ text, completed }) {
    return (
        <span className={completed ? "text-decoration-line-through text-success" : ""}>
      {text}
    </span>
    );
}
