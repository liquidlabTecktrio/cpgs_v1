import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/SideBar/Sidebar'
import Calibration from '../Calibration/Calibration'
import Networksetup from '../Networksetup/Networksetup'
import Spacesetup from '../Spacesetup/Spacesetup'
import { Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom'
import Summary from '../Summary/Summary'
import AutoCoordinateFinder from '../AutoCoordinateFinder/AutoCoordinateFinder'
import ManualCoordinateFinder from '../ManualCoordinateFinder/ManualCoordinateFinder'

export default function Dashboard() {
  const [content, setContent] = useState(0)
  const navigate = useNavigate()
  const Logout = ()=>{
    navigate('/login')
  }

  return (
    <div className='flex'>
      {/* <Loginpage/> */}
      <Sidebar setContent={setContent} />

      <div className='p-10 w-full'>
      {content == 0 ? <Summary /> :
        content == 1 ? <Spacesetup setContent={setContent}/> :
          content == 2 ? <Networksetup /> :
            content == 3 ? <Calibration /> :
              content == 4 ? Logout():
              content == 5 ? <AutoCoordinateFinder setContent={setContent}/>:
              content == 6 ?<ManualCoordinateFinder setContent={setContent}/>:
                ""}

</div>

    </div>

  )
}
