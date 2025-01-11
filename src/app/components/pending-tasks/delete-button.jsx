import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../../styles/components/pending-tasks/_delete-button.scss";

export default function DeleteButton({ onClick }) {
    const handleDelete = () => {
        // Kullanıcıya onay sorusu
        const userConfirmed = window.confirm("Are you sure you want to delete this task?");
        if (userConfirmed) {
            onClick(); // Onay verilirse onClick fonksiyonu çağrılır
        }
    };

    return (
        <button type="button" className="btn delete-button btn-danger btn-sm" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash} />
        </button>
    );
}
