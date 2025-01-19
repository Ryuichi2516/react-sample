import { useState } from "react";
import { createPortal } from "react-dom";
import "../style/modal.css";

const UseModal = () => {
  const [show, setShow] = useState(false);

  const OpenModal = () => {
    setShow(true);
  };

  const CloseModal = () => {
    setShow(false);
  };

  const OkModal = () => {
    setShow(false);
  };

  const Modal = ({ children }: { children: React.ReactNode }): JSX.Element => {
    return createPortal(
      <>
        {show && (
          <div id="overlay1">
            <div id="overlay2"></div>
            <div id="contents">{children}</div>
          </div>
        )}
      </>,
      document.getElementById("root") as HTMLElement
    );
  };

  return { Modal, OpenModal, OkModal, CloseModal };
};

export default UseModal;
