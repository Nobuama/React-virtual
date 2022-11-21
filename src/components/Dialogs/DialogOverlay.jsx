import React from "react";
import {useEffect} from "react";

export const CreateOverlay = ({title, closeDialog, children}) => {

  useEffect(() => {
    const closeOnEscapeKey = e => e.key === "Escape" ? closeDialog() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [closeDialog]);



  return (
    <div className="overlay" onClick={closeDialog}>
      <div className="modal__block" onClick={(e) => e.stopPropagation()}>
        <h3 className="modal__header">{title}</h3>
        <div>{children}</div>
      </div>
    </div>
  );
}