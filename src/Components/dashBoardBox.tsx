import React, {useEffect, useRef, useState} from 'react'
import "../index.css"
import Modal from './Modal'

const dashBoardBox = () => {

    const [isOpenModal, setIsOpenModal] = useState(false)
    const ref = useRef();

    const handleOnclick = () =>{
        setIsOpenModal(true)
    }
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-pink-500 space-x-20">
        
    {<Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>}
       
        <div className="h-32 w-32 z-0">
            <a onClick={handleOnclick}><div className=" h-full bg-black rounded-lg shadow-2xl">
               
            </div></a>
           
        </div>

    </div>

    </>
  )
}

export default dashBoardBox