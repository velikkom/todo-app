import React from "react";

export default function TaskText({ text, completed }) {
    return (
      <span
      className={completed ? "text-decoration-line-through" : ""}
      style={{
        fontSize: "2rem",
        color: "#78cfb0",
      }}
    >
      {text}
    </span>
    
    );
}
