// components/ModalComponent.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideModal } from "../features/modal/modalSlice";
import staticComponentMap from "./static/StaticComponentMap";

// Accept children as a prop
const ModalComponent = ({ children }) => {
  const dispatch = useDispatch();
  const { isVisible, content, title, componentId } = useSelector(
    (state) => state.modal
  );

  if (!isVisible) return null;

  const ComponentToRender = staticComponentMap[componentId];

  return (
    <dialog
      className="modal"
      open={isVisible}
      onClick={() => dispatch(hideModal())}
    >
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        {" "}
        {/* Prevent modal close when clicking inside */}
        {title && <h3 className="font-bold text-lg">{title}</h3>}
        {content && <p className="py-4">{content}</p>}
        {ComponentToRender && <ComponentToRender />}
        <button onClick={() => dispatch(hideModal())}>Close</button>
      </div>
    </dialog>
  );
};

export default ModalComponent;
