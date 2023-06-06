import React, { useEffect, useRef, useState } from "react";
import "../index.css";
import Modal from "./Modal";

const dashBoardBox = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const ref = useRef();

  const handleOnclick = () => {
    setIsOpenModal(true);
  };
  return (
    <div>
      
      {<Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />}
      <div className="">
        <div onClick={handleOnclick}>
          <div className="w-32 h-32 bg-black rounded-lg shadow-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default dashBoardBox;
