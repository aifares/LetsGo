import React from 'react'
import DashBoardBox from './dashBoardBox'

const dashBoard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-500 space-x-20" ><DashBoardBox/> <DashBoardBox/><DashBoardBox/><DashBoardBox/><DashBoardBox/><DashBoardBox/></div>
  )
}

export default dashBoard