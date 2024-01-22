import React from 'react'

const Worth = () => {
    return (
        <div className='h-screen w-screen'>
            {/* Header*/}
            <div className="flex gap-2 sm:gap-4 items-center justify-center p-4 ">
                {/* icon */}
                <div className='glowing-icon'>
                    <iconify-icon icon="noto-v1:money-bag" width="62" height="62"></iconify-icon>
                </div>

                {/* Text */}
                <div className="flex flex-col justify-center ">
                    <h1 className="font-[poppins] text-white font-medium text-2xl sm:text-3xl">
                        LeetCode
                        <span className='nunito-bold text-3xl sm:text-4xl text-yellow-400 cedarville'> Worth</span>
                    </h1>

                    <p className="font-[poppins] text-gray-200 text-xs   sm:text-base ">Calculate the Real Worth of Your Hours Spent on DSA!</p>
                </div>
            </div>
            <div style={{ height: '0.5px', backgroundColor: '#E0E0E0' }} className="h-[0.5px] bg-white" />
        </div>
    )
}

export default Worth