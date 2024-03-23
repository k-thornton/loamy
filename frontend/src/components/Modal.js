import React from "react";
import { useModal } from "../contexts/ModalContext";

const Modal = () => {
  const { content, isVisible, hideModal, text, title, buttonText } = useModal();

  if (!isVisible) return null;

  return (
    <dialog className="modal" open={isVisible} onClick={hideModal}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        {title && <h3 className="font-bold text-lg">{title}</h3>}
        {text && <p className="py-4">{text}</p>}
        {content}
        <div className="modal-action">
          <button className="btn btn-accent" onClick={hideModal}>
            {buttonText ? buttonText : "Close"}
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
