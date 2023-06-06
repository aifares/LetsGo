import React, { useEffect, useRef, useState } from "react";
import "../index.css";

const Modal = ({ isOpenModal, setIsOpenModal }) => {
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isOpenModal && ref.current && !ref.current?.contains(e.target)) {
        setIsOpenModal(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isOpenModal]);

  if (!isOpenModal) {
    return null;
  }

  return (
    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div
        ref={ref}
        className={
          "flex center w-[90vw] h-[90vh] bg-white white z-[10] rounded-xl"
        }
      >
        hi
      </div>
    </div>
  );
};

export default Modal;
