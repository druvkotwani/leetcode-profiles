import React from 'react'

const HomeSkeleton = () => {
    return (

        <div className='flex justify-center items-center rounded-lg h-[280px] bg-[#292829]'>

            <div className="flex flex-col gap-4 w-52">
                <div className="flex gap-4 items-center">
                    <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
                    <div className="flex flex-col gap-4">
                        <div className="skeleton h-4 w-20"></div>
                        <div className="skeleton h-4 w-28"></div>
                    </div>
                </div>
                <div className="skeleton h-32 w-full"></div>
            </div>
        </div>


    )
}

export default HomeSkeleton