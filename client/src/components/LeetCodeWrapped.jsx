import React from 'react'

const LeetCodeWrapped = () => {
    return (
        <>
            {/* Header*/}
            <div className="flex sm:gap-4 items-center justify-center p-4">
                {/* SVG */}
                <div className="flex h-12 w-24 relative overflow-hidden ">
                    <svg width="50" height="50" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="snow-main snow">
                        <path d="M22 0.400024C23.1172 0.400024 24.0625 1.34534 24.0625 2.46252V6.50159L26.0391 4.52502C26.8125 3.66565 28.1016 3.66565 28.875 4.52502C29.7344 5.29846 29.7344 6.58752 28.875 7.36096L23.9766 12.2594V18.8766L29.7344 15.611L31.5391 8.90784C31.7969 7.79065 32.9141 7.18909 34.0312 7.4469C35.1484 7.70471 35.75 8.90784 35.4922 9.93909L34.8047 12.6891L37.9844 10.7985C38.9297 10.2828 40.2188 10.6266 40.7344 11.5719C41.3359 12.6031 40.9922 13.8063 40.0469 14.4078L36.8672 16.2125L39.5312 16.986C40.6484 17.2438 41.25 18.361 40.9922 19.4781C40.7344 20.5953 39.5312 21.1969 38.5 20.9391L31.7969 19.1344L26.125 22.4L31.7969 25.7516L38.5 23.9469C39.5312 23.6031 40.7344 24.2906 40.9922 25.4078C41.25 26.525 40.6484 27.6422 39.5312 27.9L36.8672 28.6735L40.0469 30.4781C40.9922 31.0797 41.3359 32.2828 40.7344 33.3141C40.2188 34.2594 38.9297 34.6031 37.9844 34.0875L34.8047 32.1969L35.4922 34.9469C35.75 36.0641 35.1484 37.1813 34.0312 37.4391C32.9141 37.7828 31.7969 37.0953 31.5391 35.9781L29.7344 29.275L24.0625 26.0094V32.6266L28.9609 37.525C29.7344 38.2985 29.7344 39.5875 28.9609 40.361C28.1016 41.2203 26.8125 41.2203 26.0391 40.361L24.0625 38.3844V42.3375C24.0625 43.5406 23.1172 44.4 22 44.4C20.7969 44.4 19.9375 43.5406 19.9375 42.3375V38.3844L17.9609 40.361C17.1016 41.2203 15.8125 41.2203 15.0391 40.361C14.1797 39.5875 14.1797 38.2985 15.0391 37.4391L19.9375 32.5406V26.0094L14.2656 29.275L12.4609 35.9781C12.1172 37.0953 11 37.6969 9.88281 37.4391C8.76562 37.1813 8.16406 35.9781 8.42188 34.9469L9.19531 32.1969L5.92969 34.0875C4.98438 34.6031 3.69531 34.2594 3.17969 33.3141C2.57812 32.2828 2.92188 31.0797 3.86719 30.4781L7.13281 28.6735L4.38281 27.9C3.26562 27.6422 2.66406 26.525 2.92188 25.4078C3.17969 24.2906 4.38281 23.6031 5.41406 23.9469L12.1172 25.7516L17.875 22.4L12.1172 19.1344L5.41406 20.9391C4.38281 21.1969 3.17969 20.5953 2.92188 19.4781C2.66406 18.361 3.26562 17.2438 4.38281 16.986L7.13281 16.2125L3.86719 14.4078C2.92188 13.8063 2.57812 12.6031 3.17969 11.5719C3.69531 10.6266 4.98438 10.2828 5.92969 10.7985L9.19531 12.6891L8.42188 9.93909C8.16406 8.8219 8.76562 7.70471 9.88281 7.4469C11 7.10315 12.1172 7.79065 12.4609 8.90784L14.1797 15.611L19.9375 18.8766V12.2594L15.0391 7.36096C14.1797 6.58752 14.1797 5.29846 15.0391 4.52502C15.8125 3.66565 17.1016 3.66565 17.875 4.52502L19.8516 6.50159V2.46252C19.8516 1.34534 20.7969 0.400024 21.9141 0.400024H22Z" fill="url(#paint0_linear_1644_359)"></path>
                        <defs>
                            <linearGradient id="paint0_linear_1644_359" x1="22" y1="-0.0999756" x2="22" y2="43.9" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#64D2FF" stopOpacity="0.52"></stop>
                                <stop offset="1" stopColor="#64D2FF"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg width="20" height="20" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="snow-sm snow ">
                        <path d="M22 0.400024C23.1172 0.400024 24.0625 1.34534 24.0625 2.46252V6.50159L26.0391 4.52502C26.8125 3.66565 28.1016 3.66565 28.875 4.52502C29.7344 5.29846 29.7344 6.58752 28.875 7.36096L23.9766 12.2594V18.8766L29.7344 15.611L31.5391 8.90784C31.7969 7.79065 32.9141 7.18909 34.0312 7.4469C35.1484 7.70471 35.75 8.90784 35.4922 9.93909L34.8047 12.6891L37.9844 10.7985C38.9297 10.2828 40.2188 10.6266 40.7344 11.5719C41.3359 12.6031 40.9922 13.8063 40.0469 14.4078L36.8672 16.2125L39.5312 16.986C40.6484 17.2438 41.25 18.361 40.9922 19.4781C40.7344 20.5953 39.5312 21.1969 38.5 20.9391L31.7969 19.1344L26.125 22.4L31.7969 25.7516L38.5 23.9469C39.5312 23.6031 40.7344 24.2906 40.9922 25.4078C41.25 26.525 40.6484 27.6422 39.5312 27.9L36.8672 28.6735L40.0469 30.4781C40.9922 31.0797 41.3359 32.2828 40.7344 33.3141C40.2188 34.2594 38.9297 34.6031 37.9844 34.0875L34.8047 32.1969L35.4922 34.9469C35.75 36.0641 35.1484 37.1813 34.0312 37.4391C32.9141 37.7828 31.7969 37.0953 31.5391 35.9781L29.7344 29.275L24.0625 26.0094V32.6266L28.9609 37.525C29.7344 38.2985 29.7344 39.5875 28.9609 40.361C28.1016 41.2203 26.8125 41.2203 26.0391 40.361L24.0625 38.3844V42.3375C24.0625 43.5406 23.1172 44.4 22 44.4C20.7969 44.4 19.9375 43.5406 19.9375 42.3375V38.3844L17.9609 40.361C17.1016 41.2203 15.8125 41.2203 15.0391 40.361C14.1797 39.5875 14.1797 38.2985 15.0391 37.4391L19.9375 32.5406V26.0094L14.2656 29.275L12.4609 35.9781C12.1172 37.0953 11 37.6969 9.88281 37.4391C8.76562 37.1813 8.16406 35.9781 8.42188 34.9469L9.19531 32.1969L5.92969 34.0875C4.98438 34.6031 3.69531 34.2594 3.17969 33.3141C2.57812 32.2828 2.92188 31.0797 3.86719 30.4781L7.13281 28.6735L4.38281 27.9C3.26562 27.6422 2.66406 26.525 2.92188 25.4078C3.17969 24.2906 4.38281 23.6031 5.41406 23.9469L12.1172 25.7516L17.875 22.4L12.1172 19.1344L5.41406 20.9391C4.38281 21.1969 3.17969 20.5953 2.92188 19.4781C2.66406 18.361 3.26562 17.2438 4.38281 16.986L7.13281 16.2125L3.86719 14.4078C2.92188 13.8063 2.57812 12.6031 3.17969 11.5719C3.69531 10.6266 4.98438 10.2828 5.92969 10.7985L9.19531 12.6891L8.42188 9.93909C8.16406 8.8219 8.76562 7.70471 9.88281 7.4469C11 7.10315 12.1172 7.79065 12.4609 8.90784L14.1797 15.611L19.9375 18.8766V12.2594L15.0391 7.36096C14.1797 6.58752 14.1797 5.29846 15.0391 4.52502C15.8125 3.66565 17.1016 3.66565 17.875 4.52502L19.8516 6.50159V2.46252C19.8516 1.34534 20.7969 0.400024 21.9141 0.400024H22Z" fill="url(#paint0_linear_1644_359)"></path>
                        <defs>
                            <linearGradient id="paint0_linear_1644_359" x1="22" y1="-0.0999756" x2="22" y2="43.9" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#64D2FF" stopOpacity="0.52"></stop>
                                <stop offset="1" stopColor="#64D2FF"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg width="14" height="14" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="snow-xs snow ">
                        <path d="M22 0.400024C23.1172 0.400024 24.0625 1.34534 24.0625 2.46252V6.50159L26.0391 4.52502C26.8125 3.66565 28.1016 3.66565 28.875 4.52502C29.7344 5.29846 29.7344 6.58752 28.875 7.36096L23.9766 12.2594V18.8766L29.7344 15.611L31.5391 8.90784C31.7969 7.79065 32.9141 7.18909 34.0312 7.4469C35.1484 7.70471 35.75 8.90784 35.4922 9.93909L34.8047 12.6891L37.9844 10.7985C38.9297 10.2828 40.2188 10.6266 40.7344 11.5719C41.3359 12.6031 40.9922 13.8063 40.0469 14.4078L36.8672 16.2125L39.5312 16.986C40.6484 17.2438 41.25 18.361 40.9922 19.4781C40.7344 20.5953 39.5312 21.1969 38.5 20.9391L31.7969 19.1344L26.125 22.4L31.7969 25.7516L38.5 23.9469C39.5312 23.6031 40.7344 24.2906 40.9922 25.4078C41.25 26.525 40.6484 27.6422 39.5312 27.9L36.8672 28.6735L40.0469 30.4781C40.9922 31.0797 41.3359 32.2828 40.7344 33.3141C40.2188 34.2594 38.9297 34.6031 37.9844 34.0875L34.8047 32.1969L35.4922 34.9469C35.75 36.0641 35.1484 37.1813 34.0312 37.4391C32.9141 37.7828 31.7969 37.0953 31.5391 35.9781L29.7344 29.275L24.0625 26.0094V32.6266L28.9609 37.525C29.7344 38.2985 29.7344 39.5875 28.9609 40.361C28.1016 41.2203 26.8125 41.2203 26.0391 40.361L24.0625 38.3844V42.3375C24.0625 43.5406 23.1172 44.4 22 44.4C20.7969 44.4 19.9375 43.5406 19.9375 42.3375V38.3844L17.9609 40.361C17.1016 41.2203 15.8125 41.2203 15.0391 40.361C14.1797 39.5875 14.1797 38.2985 15.0391 37.4391L19.9375 32.5406V26.0094L14.2656 29.275L12.4609 35.9781C12.1172 37.0953 11 37.6969 9.88281 37.4391C8.76562 37.1813 8.16406 35.9781 8.42188 34.9469L9.19531 32.1969L5.92969 34.0875C4.98438 34.6031 3.69531 34.2594 3.17969 33.3141C2.57812 32.2828 2.92188 31.0797 3.86719 30.4781L7.13281 28.6735L4.38281 27.9C3.26562 27.6422 2.66406 26.525 2.92188 25.4078C3.17969 24.2906 4.38281 23.6031 5.41406 23.9469L12.1172 25.7516L17.875 22.4L12.1172 19.1344L5.41406 20.9391C4.38281 21.1969 3.17969 20.5953 2.92188 19.4781C2.66406 18.361 3.26562 17.2438 4.38281 16.986L7.13281 16.2125L3.86719 14.4078C2.92188 13.8063 2.57812 12.6031 3.17969 11.5719C3.69531 10.6266 4.98438 10.2828 5.92969 10.7985L9.19531 12.6891L8.42188 9.93909C8.16406 8.8219 8.76562 7.70471 9.88281 7.4469C11 7.10315 12.1172 7.79065 12.4609 8.90784L14.1797 15.611L19.9375 18.8766V12.2594L15.0391 7.36096C14.1797 6.58752 14.1797 5.29846 15.0391 4.52502C15.8125 3.66565 17.1016 3.66565 17.875 4.52502L19.8516 6.50159V2.46252C19.8516 1.34534 20.7969 0.400024 21.9141 0.400024H22Z" fill="url(#paint0_linear_1644_359)"></path>
                        <defs>
                            <linearGradient id="paint0_linear_1644_359" x1="22" y1="-0.0999756" x2="22" y2="43.9" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#64D2FF" stopOpacity="0.52"></stop>
                                <stop offset="1" stopColor="#64D2FF"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* Text */}
                <div className="flex flex-col justify-center">
                    <h1 className="JakartaSans text-white font-bold text-xl sm:text-2xl">
                        <strong className='JakartaSans-bold text-3xl sm:text-4xl  '>2023 </strong>
                        <br />
                        LeetCode Wrap-Up</h1>
                    <p className="JakartaSans text-gray-200 text-sm hidden sm:block">Review your LeetCode activity from the past year</p>
                </div>


            </div>

            {/* Profile Card */}







            {/* Community Stat */}
            <div className="stats shadow ">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Profile Views</div>
                    <div className="stat-value text-secondary">2.6M</div>
                    <div className="stat-desc">Last Week: 0</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Total Likes</div>
                    <div className="stat-value text-primary">25.6K</div>
                    <div className="stat-desc">Last Week: 0</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z" stroke="#FCD53F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    </div>
                    <div className="stat-title ">Reputation</div>
                    <div className="stat-value text-[#FCD53F]">25.6K</div>
                    <div className="stat-desc">Last Week: 0</div>
                </div>
            </div>
        </>
    )
}

export default LeetCodeWrapped