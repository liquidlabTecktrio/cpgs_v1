import React from 'react'
import Labelwithdescription from '../../Components/labelwithdescription/Labelwithdescription'

export default function Spacesetup({setContent}) {
  return (
    <div>
      <Labelwithdescription label="Auto" description="space coordianate will be automaticaly selected" updatedata={setContent} data={5}/>
      <hr/>
      <Labelwithdescription label="Manual" description="space coordianate have to be selected manualy" updatedata={setContent} data={6}/>
      <hr/>
    </div>
  )
}
