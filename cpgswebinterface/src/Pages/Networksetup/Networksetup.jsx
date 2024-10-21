import React from 'react'
import Inputtextbox from '../../Components/inputtextbox/Inputtextbox'

export default function Networksetup() {
  return (
    <div className='w-full'>
      <div className='w-1/4'>
      <Inputtextbox label="Set Hostname" description="space coordianate will be automaticaly selected" placeholder="CPGS_1001" />
      <Inputtextbox label="IP Assignment" description="space coordianate have to be selected manualy" placeholder="STATIC" />
     
      </div>
      <div className='flex w-1/2 justify-evenly border border-black rounded-md p-10'>
        <div>
          <Inputtextbox label="IP4 Address" description="Enter the Static IP4 Address for this Device" placeholder="0.0.0.0" />
          <Inputtextbox label="Router IP / Gateway IP" description="Enter the Router IP Address" placeholder="0.0.0.0" />

        </div>
        <div>
          <Inputtextbox label="Subnet Mask" description="Enter the Subnet mask for this Address" placeholder="0.0.0.0" />

        </div>
      </div>
    </div>
  )
}
