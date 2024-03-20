import React from "react";
import { useModal } from "../contexts/ModalContext";

const Modal = () => {
  const { content, isVisible, hideModal, text, title, buttonText } = useModal();

  if (!isVisible) return null;

  return (
    <dialog
      className="modal modal-bottom sm:modal-middle"
      open={isVisible}
      onClick={hideModal}
    >
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        {" "}
        {/* Prevent modal close when clicking inside */}
        {title && <h3 className="font-bold text-lg">{title}</h3>}
        {text && <p className="py-4">{text}</p>}
        {content}
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-active btn-accent" onClick={hideModal}>
              {buttonText ? buttonText : "Close"}
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
