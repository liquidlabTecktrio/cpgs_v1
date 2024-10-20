import React, { useState } from 'react'
import HeadingwithDescription from '../HeadingwithDescription/HeadingwithDescription'
import SelectableButton from '../SelectableButton/SelectableButton'

export default function Sidebar({setContent}) {

    const [selectedIndex, setSelectedIndex] = useState(0)

    return (
        <div className='flex-col bg-black h-screen w-1/6 p-5'>
            <HeadingwithDescription label="CPGS Console" description="Manage the Spaces and other Network relatted things from here." />
            <div className='flex-col my-10 mx-5'>
                <SelectableButton text="Summary" selected={selectedIndex == 0 ? true : false} onselect={()=>{setSelectedIndex(0);setContent(0)}}/>
                <SelectableButton text="Space Setup" selected={selectedIndex == 1 ? true : false} onselect={()=>{setSelectedIndex(1);setContent(1)}}/>
                <SelectableButton text="Network Settings" selected={selectedIndex == 2 ? true : false} onselect={()=>{setSelectedIndex(2);setContent(2)}}/>
                <SelectableButton text="Calibrations" selected={selectedIndex == 3 ? true : false} onselect={()=>{setSelectedIndex(3);setContent(3)}}/>
                <SelectableButton text="Logout" selected={selectedIndex == 4 ? true : false} onselect={()=>{setSelectedIndex(4);setContent(4)}}/>
            </div>
        </div>
    )
}
