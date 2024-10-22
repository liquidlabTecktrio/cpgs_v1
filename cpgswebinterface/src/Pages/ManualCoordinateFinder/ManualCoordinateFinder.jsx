import React, { useEffect } from 'react'
import Submitbutton from '../../Components/submitbutton/Submitbutton'
import Labelwithdescription from '../../Components/labelwithdescription/Labelwithdescription'
import { GET_MANUAL_CALIBRATE_FRAME_REQUEST } from '../../API_Requests'

export default function ManualCoordinateFinder() {
  useEffect(() => {
    GET_MANUAL_CALIBRATE_FRAME_REQUEST()
  })
  return (
    <div>
      <Labelwithdescription label="Manual Coordinate Finder" description="Here our Auto finder feature will help you to find the space coordinates in fast." />
      <div >
        <img id="video" alt="Video Stream" />
      </div>
      <div className='flex justify-end py-10'>
        <Submitbutton text="Retry" />

        <div className='w-5'>

        </div>
        <Submitbutton text="Save" />

      </div>
    </div>
  )
}
