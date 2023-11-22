import React from 'react'

const Navbar = () => {
    return (
        <div className='sticky top-0 z-50 bg-[#292829] shadow-lg border-b border-[#E0E0E0] overflow-hidden'>
            <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8  '>
                <div className='flex h-16 items-center justify-center'>

                    <div className='flex md:items-center md:gap-12 lg:gap-32 items-center justify-center'>

                        {/* logo */}
                        <div className="h-10 w-10 mr-4">
                            <svg width="95" height="111" viewBox="0 0 95 111" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto max-w-none">
                                <path d="M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z" fill="#FFA116"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z" fill="#B3B3B3"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z" fill="white"></path>
                            </svg>
                        </div>

                        {/* Search Bar */}
                        <div className="hidden sm:block">
                            <form className="flex items-center w-80">
                                <label htmlFor="simple-search" className="sr-only">Search</label>
                                <div className="relative w-full">
                                    <input type="text" id="simple-search" className="border border-gray text-sm rounded-lg block shadow w-full pl-3 p-2.5  bg-[#0e0e0e]  border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search by Name or Username..." required="" />
                                </div>
                            </form>
                        </div>

                        {/* icons */}
                        <div className="flex items-center gap-1 sm:gap-4">
                            <div className="sm:flex items-center sm:gap-2">
                                {/* <a target="_blank" rel="noopener noreferrer" className="rounded-md bg-[#0e0e0e] text-white hover:bg-gray-600 border hidden sm:block border-gray-600 px-3 py-2 text-sm font-bold shadow" href="https://dhruvkotwani.me/">
                                <iconify-icon icon="streamline-emojis:globe-showing-americas" style={{ color: 'white', }} width="22" height="22"></iconify-icon>
                            </a> */}
                                <a target="_blank" rel="noopener noreferrer" className="rounded-md bg-[#0e0e0e] text-white hover:bg-[#292829] border hidden sm:block border-gray-600 px-3 py-2 text-sm font-bold shadow" href="https://linkedin.com/in/dhruv-kotwani">
                                    <iconify-icon icon="devicon:linkedin" style={{ color: 'white', }} width="22" height="22"></iconify-icon>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" className="rounded-md bg-[#0e0e0e] text-white hover:bg-[#292829] border hidden sm:block border-gray-600 px-3 py-2 text-sm font-medium shadow" href="https://github.com/druvkotwani">
                                    <iconify-icon icon="mdi:github" style={{ color: 'white', }} width="22" height="22"></iconify-icon>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" className="rounded-md bg-[#0e0e0e] text-white hover:bg-[#292829] border hidden sm:block border-gray-600 px-3 py-2 text-sm font-medium  shadow" href="https://twitter.com/druv_kotwani">
                                    <iconify-icon icon="fa6-brands:square-x-twitter" style={{ color: 'white', }} width="22" height="22"></iconify-icon>
                                </a>
                                <a className="rounded-md bg-[#0e0e0e] text-white hover:bg-[#292829] border border-gray-600 hidden  sm:block px-4 py-2.5 text-sm font-medium shadow" target="_blank" rel="noopener noreferrer" title="Add your Leetcode Profile to this list" href="https://github.com/druvkotwani/Leetcode-Profiles/">Contribute ⭐</a>
                            </div>

                            {/* Smaller devices */}
                            <div className="sm:hidden flex gap-2">
                                <form className="items-center flex">
                                    <label htmlFor="simple-search" className="sr-only">Search</label>
                                    <div className="relative w-full">
                                        <input type="text" id="simple-search" className="border border-gray text-sm rounded-lg block w-full pl-3 p-2.5  bg-[#0e0e0e] border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 shadow focus:border-blue-500" placeholder="Search user profile..." required="" />
                                    </div>
                                </form>
                                <div className='flex'>
                                    <a className="rounded-md bg-[#0e0e0e] text-white hover:bg-[#292829] border border-gray-600 px-3 ml-1 py-2.5 text-sm font-medium  shadow" href="https://github.com/druvkotwani/Leetcode-Profiles/">⭐</a>
                                    <a className="rounded-md bg-[#0e0e0e] text-white hover:bg-[#292829] border border-gray-600 px-3 ml-1 py-2 text-sm font-medium  shadow" href="https://linkedin.com/in/dhruv-kotwani">
                                        <iconify-icon icon="devicon:linkedin" style={{ color: 'white', }} width="22" height="22"></iconify-icon>
                                    </a>
                                    <a className="rounded-md bg-[#0e0e0e] text-white hover:bg-[#292829] border border-gray-600 px-3 ml-1 py-2 text-sm font-medium  shadow" href="https://twitter.com/druv_kotwani">
                                        <iconify-icon icon="fa6-brands:square-x-twitter" style={{ color: 'white', }} width="22" height="22"></iconify-icon>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div >
        </div>
    )
}

export default Navbar