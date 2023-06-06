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

  return (
    <div ref={ref} className={isOpenModal ? "opacity-100 transition duration-1000 ease-in-out flex justify-center bg-white z-[1000] h-[75%] w-[75%] absolute top-[50%] right-[50%] transform translate-x-[50%] translate-y-[-50%] rounded-lg shadow-lg" : "opacity-0"}>
    hi
    </div>
  )
}

export default Modal