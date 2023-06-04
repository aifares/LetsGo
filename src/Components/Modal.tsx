import React, {useEffect, useRef, useState } from 'react'
import "../index.css"

const Modal = ({isOpenModal, setIsOpenModal}) => {

    const ref = useRef();

    useEffect(() => {
        const checkIfClickedOutside = e => {
          // If the menu is open and the clicked target is not within the menu,
          // then close the menu
          if (isOpenModal && ref.current && !ref.current?.contains(e.target)) {
            setIsOpenModal(false)
          }
        }
    
        document.addEventListener("mousedown", checkIfClickedOutside)
    
        return () => {
          // Cleanup the event listener
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [isOpenModal])


    if(!isOpenModal){
        return null;
    }
  return (
    <div ref={ref} className="flex justify-center bg-white z-[1000] h-[75%] w-[75%] absolute rounded-lg shadow-lg">
    hi
    </div>
  )
}

export default Modal