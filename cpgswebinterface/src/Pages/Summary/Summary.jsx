import React from 'react'
import Labelwithdescription from '../../Components/labelwithdescription/Labelwithdescription'

export default function Summary() {
  return (
    <>
    <div className='py-5'>
        <Labelwithdescription label="Watching" description="currently watching spaces by this cpgs system ( Maximum Capacity is 3 space "/>
        <p className='text-4xl font-bold'>2</p>
    </div>
    <hr className='my-5'/>
    <div>
        <Labelwithdescription label="Graphical Representation" description="Graphical Representation of the Space Watching Status"/>
        <div className='flex '>
        <div className='border-8 border-red-600  rounded-xl h-60 w-32 flex justify-center items-end p-3 m-5'>
                <div>
                <p>Space 1</p>
                <p>SV 20</p>
                </div>
            </div> 
            <div className='border-8 border-green-600  rounded-xl h-60 w-32 flex justify-center items-end p-3 m-5'>
                <div>
                <p>Space 1</p>
                <p>SV 20</p>
                </div>
            </div>
            <div className='border-8 border-gray-300  rounded-xl h-60 w-32 flex justify-center items-end p-3 m-5'>
                <div>
                <p>Space 1</p>
                <p>SV 20</p>
                </div>
            </div>
        </div>
       

    </div>
    <hr className='my-5'/>
    <Labelwithdescription label="Dectection Value" description="Once the Object Sensing Value Crosses this line the Space is Marked as Occupied."/>
        <p className='text-4xl font-bold'>50</p>
    </>
    
  )
}
