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
    <div >
        
    {<Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>}
       
        
            <div onClick={handleOnclick}><div className="h-full bg-black rounded-lg shadow-2xl">
               
            </div>
           
        </div>

    </div>

    </>
  )
}

export default dashBoardBox