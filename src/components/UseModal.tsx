import { useState } from "react";
import { createPortal } from "react-dom";

const UseModal = () => {
  const [show, setShow] = useState(false);

  const OpenModal = () => {
    setShow(true);
  };

  const CloseModal = () => {
    setShow(false);
  };

  const Modal = ({ children }: { children: React.ReactNode }): JSX.Element => {
    return createPortal(
      <>
        {show && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 100,
            }}
          >
            <div
              style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: "gray",
                opacity: "0.5",
              }}
            ></div>
            <div style={{ position: "relative", zIndex: 999 }}>{children}</div>
          </div>
        )}
      </>,
      document.getElementById("root") as HTMLElement
    );
  };

  return { Modal, OpenModal, CloseModal };
};

export default UseModal;
