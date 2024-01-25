import React from 'react'

const Skeleton = () => {
    return (
        <div className='rounded-lg w-[95%] sm:w-[65%] md:w-[50%] lg:w-[35%] xl:w-[30%]  h-[270px] bg-[#292829] mb-5 flex justify-center items-center'>
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

export default Skeleton