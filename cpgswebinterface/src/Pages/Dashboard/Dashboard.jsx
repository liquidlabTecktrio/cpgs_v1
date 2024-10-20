import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/SideBar/Sidebar'
import Calibration from '../Calibration/Calibration'
import Networksetup from '../Networksetup/Networksetup'
import Spacesetup from '../Spacesetup/Spacesetup'
import { Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom'
import Summary from '../Summary/Summary'
import Loginpage from '../LoginPage/Loginpage'

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

      {/* Authenticated Routes */}
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      {content == 0 ? <Summary /> :
        content == 1 ? <Spacesetup /> :
          content == 2 ? <Networksetup /> :
            content == 3 ? <Calibration /> :
              content == 4 ? Logout():
                ""}



    </div>

  )
}
