import React, { useEffect } from 'react'
import Labelwithdescription from '../../Components/labelwithdescription/Labelwithdescription'
import Submitbutton from '../../Components/submitbutton/Submitbutton'
import { GET_AUTO_CALIBRATE_FRAME_REQUEST } from '../../API_Requests'

export default function AutoCoordinateFinder() {
    useEffect(()=>{
        GET_AUTO_CALIBRATE_FRAME_REQUEST()
    })
    return (
        <div>
            <Labelwithdescription label="Auto Coordinate Finder" description="Here our Auto finder feature will help you to find the space coordinates in fast." />
            <div className='w-full bg-black h-60'>

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
