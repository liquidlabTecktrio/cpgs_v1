import React from 'react'
import Submitbutton from '../../Components/submitbutton/Submitbutton'
import Labelwithdescription from '../../Components/labelwithdescription/Labelwithdescription'

export default function ManualCoordinateFinder() {
  return (
    <div>
    <Labelwithdescription label="Manual Coordinate Finder" description="Manualy Select the coordinates for the spaces to handle" />
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
