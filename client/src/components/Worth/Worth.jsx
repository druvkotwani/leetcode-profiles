import React, { useState } from 'react'
import About from '../About'
import data from '../../utils/tempdata'
import Profile from '../Profile'
import SvgData from '../../utils/svgData'
import { Link } from 'react-router-dom';

const Worth = () => {
    const [userName, setUserName] = useState('')
    const [loading, setLoading] = useState(false)
    const amount = ((Math.random() * 1000) + 1000).toFixed(1)
    function handleInputChange(e) {
        setUserName(e.target.value)
    }
    return (
        <div className='h-full w-full'>
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

            {/* Input */}
            <div>
                <h1 className="font-[poppins] text-white font-light    text-xl sm:text-3xl text-center mt-4">
                    Estimate your worth in <span className=' text-3xl sm:text-4xl text-yellow-400 cedarville'>LeetCode</span>!
                </h1>
                <form onSubmit={(e) => { console.log(userName); e.preventDefault(); setLoading(true) }} className="flex flex-col justify-center items-center gap-4 p-4">
                    <input type="text" placeholder="Enter your LeetCode username" className="border-2 focus:border-yellow-500 focus:outline-none focus:ring focus:ring-yellow-200     border-gray-300 text-white rounded-md p-2 w-80 sm:w-96" onChange={handleInputChange} />

                    <div className='flex gap-2 items-center justify-center'>
                        <button disabled={loading} className={`${userName.trim() === '' ? 'pointer-events-none opacity-50 flex items-center justify-center gap-2' : ''}flex items-center justify-center gap-2  bg-yellow-500 text-white font-[poppins] font-medium text-sm sm:text-base rounded-md p-2 w-40 sm:w-46`} >
                            {
                                loading ?
                                    <svg className="animate-spin h-5 w-5 " viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                                        <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                    </svg>
                                    :
                                    (<iconify-icon icon="noto-v1:money-with-wings" width='20' height='20' ></iconify-icon>)
                            }
                            {
                                loading ? 'Calculating' : 'Calculate'
                            }
                        </button>
                        <Link to='/'>
                            <button className={`mx-auto flex items-center justify-center gap-2  bg-yellow-500 text-white font-[poppins] font-medium text-sm sm:text-base rounded-md p-2 `} >
                                <iconify-icon icon="noto:house" width='20' height='20' ></iconify-icon>
                            </button>
                        </Link>
                    </div>
                </form>


            </div>

            {/* Body */}
            <div className=' flex items-center justify-center flex-col'>
                <div className='p-4 border mt-8 rounded w-11/12   sm:w-5/12 '>

                    <div className='flex items-center justify-center gap-2'>
                        <p className='text-white font-[poppins] font-medium text-base  sm:text-lg'>Your Worth: </p>
                        <h1 className='flex justify-center items-center font-[poppins] font-medium text-2xl sm:text-2xl text-yellow-300'>
                            <iconify-icon icon="noto:heavy-dollar-sign"></iconify-icon>
                            {amount}</h1>
                    </div>

                    <div className='flex items-center justify-around sm:justify-center gap-4'>
                        <Profile userData={data} />
                        <About result={data} />
                    </div>

                    <div style={{ height: '0.5px', backgroundColor: '#E0E0E0' }} className="h-[0.5px] bg-white" />


                    <div className='w-full flex flex-wrap my-4 justify-center items-center'>
                        <div className="flex justify-center text-center mb-2">
                            <div className="text-xs sm:text-base pr-3 sm:px-4 border-r">
                                <p>990</p>
                                <p className="text-[10px] sm:text-xs text-gray-500">Total Submissions</p>
                            </div>
                            <div className="text-xs sm:text-base px-3 sm:px-4">
                                <p>1442</p>
                                <p className="text-[10px] sm:text-xs text-gray-500">Contest Rating</p>
                            </div>
                            <div className="hidden sm:block text-xs sm:text-base pl-3 sm:px-4 border-l">
                                <p>62.1%</p>
                                <p className="text-[10px] sm:text-xs text-gray-500">Top</p>
                            </div>
                            <div className="text-xs sm:text-base pl-3 sm:px-4 border-l">
                                <p>9%</p>
                                <p className="text-[10px] sm:text-xs text-gray-500">Questions Solved</p>
                            </div>
                        </div>
                        {SvgData}
                    </div>
                    <div style={{ height: '0.5px', backgroundColor: '#E0E0E0' }} className="h-[0.5px] bg-white" />


                    <div>
                        <p className=' font-[poppins] font-medium text-xs sm:text-base text-center mt-4 text-gray-400'>Get yours:
                            <span className='text-gray-200'>
                                <a href='leetcode-profiles.vercel.app' target='_blank' rel='noreferrer' className=''> leetcode-profiles.vercel.app</a>
                            </span>
                        </p>

                    </div>

                </div>

                <button className='flex items-center justify-center gap-2 bg-yellow-500 text-white font-[poppins] font-medium text-sm sm:text-base rounded-md p-2 w-50 sm:w-56 my-4'>
                    Download as Image
                    <iconify-icon icon="mdi:download" width='20' height='20' ></iconify-icon>
                </button>

            </div>
        </div >

    )
}

export default Worth