import React from 'react'
import Labelwithdescription from '../../Components/labelwithdescription/Labelwithdescription'
import Inputtextbox from '../../Components/inputtextbox/Inputtextbox'
import Togglewithlabel from '../../Components/Togglewithlabel/Togglewithlabel'

export default function Calibration() {
  return (
    <div className='w-1/2'>
      <Inputtextbox label="Dectection Value" description="This value is the triggering value for marking the space as occupied" placeholder="50"/>
      <Togglewithlabel label="Flash Light" description="Turn this on to enable flash light"/>
    </div>
  )
}
