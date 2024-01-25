import React from 'react'

const SkeletonWrapped = () => {
    return (
        <div className='flex justify-center flex-col gap-4 items-center mt-2 '>
            {/* for the first div */}
            <div className="flex flex-col gap-4 w-52">
                <div className="flex gap-4 items-center">
                    <div className="flex flex-col gap-4">
                        <div className="skeleton h-4 w-20"></div>
                        <div className="skeleton h-4 w-28"></div>
                    </div>
                    <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>

                </div>
            </div>
            <div className="skeleton h-32 w-64"></div>
            <div className="skeleton h-32 w-64"></div>
        </div>
    )
}

export default SkeletonWrapped