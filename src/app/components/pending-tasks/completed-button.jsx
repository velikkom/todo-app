import React from "react";
import { Check } from "react-bootstrap-icons";
import "../../../styles/components/pending-tasks/_complete-button.scss";

export default function CompleteButton({ onClick }) {
  const handleComplete = () => {
    
    const userConfirmed = window.confirm("Are you sure you want to mark this task as complete?");
    if (userConfirmed) {
      onClick(); 
    }
  };

  return (
    <button
      type="button"
      className="btn btn-success btn-sm me-2"
      onClick={handleComplete}
    >
      <Check />
    </button>
  );
}

