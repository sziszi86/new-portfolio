// Lightbox.jsx
import React from "react";
import "./lightbox.scss"

const Lightbox = ({content, onClose}) => {
    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <div className="lightbox-content">
                <p>{content}</p>
                <button onClick={onClose}>Bezár</button>
            </div>
        </div>
    );
};

export default Lightbox;
