import React from 'react'
import Line from './Line'

const Questions = ({ type, solved, beats, line, total }) => {
    return (


        <>
            <div className='flex justify-between w-[250px] mb-1'>
                <div className='flex items-center'>
                    <p className='w-[53px]'>{type}</p>
                    <div className="flex flex-1 items-center">
                        <span className="ml-[19px] mr-[5px] text-base font-medium leading-[20px] ">{solved}</span>
                        <span className="text-xs font-medium ">/{total}</span>
                    </div>
                </div >
                <p className="space-x-1.5"><span>Beats</span>
                    <span className="font-medium">{beats}%</span>
                </p>
            </div>
            <Line color={line} />
        </>
    )
}

export default Questions