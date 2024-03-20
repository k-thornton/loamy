// src/contexts/ModalContext.js
import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [modalProps, setModalProps] = useState({
    isVisible: false,
    content: null,
    onClose: null,
    title: null,
    text: null,
    buttonText: null,
  });

  const showModal = ({ content, onClose,  title, text, buttonText = "Close"}) => {
    setModalProps({
      isVisible: true,
      content,
      onClose,
      title,
      text,
      buttonText
    });
  };

  const hideModal = () => {
    if (modalProps.onClose) {
      modalProps.onClose();
    }
    setModalProps({
      isVisible: false,
      content: null,
      onClose: null,
      title: null,
      text: null,
      buttonText: null,
    });
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal, ...modalProps }}>
      {children}
    </ModalContext.Provider>
  );
};
