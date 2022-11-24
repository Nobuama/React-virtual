import React, {useEffect} from "react";

export const PreviewDialogWrapper = ({closeDialog, children}) =>{
  useEffect(() => {
    const closeOnEscapeKey = e => e.key === "Escape" ? closeDialog() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [closeDialog]);

  return(
    <div className="overlay" onClick={closeDialog}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}