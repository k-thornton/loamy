// components/ModalComponent.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideModal } from '../features/modal/modalSlice';

const ModalComponent = () => {
  const dispatch = useDispatch();
  const { isVisible, content, title } = useSelector((state) => state.modal);

  if (!isVisible) return null;

  return (
    <dialog className="modal" open={isVisible} onClick={() => dispatch(hideModal())}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="py-4">{content}</p>
        <button onClick={() => dispatch(hideModal())}>Close</button>
      </div>
    </dialog>
  );
};

export default ModalComponent;
