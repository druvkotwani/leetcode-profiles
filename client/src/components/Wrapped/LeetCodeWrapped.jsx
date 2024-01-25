import '../../index.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import SkeletonWrapped from '../Skeletons/SkeletonWrapped';
import SvgData from '../../utils/svgData'

const LeetCodeWrapped = () => {

    const [activeButton, setActiveButton] = useState('profile');

    const tempData = {
        fullName: "Dhruv Kotwani",
        imageUrl: "/assets/profile.png",
        totalQuestions: 3013,
        totalSolved: 287,
        Views: "96",
        Solution: "19",
        Reputation: "5",
        submissions: "545",
        activeDays: "197",
        maxStreak: "62",
        questionsDone: 9,
        questionsRemain: 91,
        svgHtml: SvgData
    }

    const [userData, setUserData] = useState(tempData);
    const [userName, setUserName] = useState('');
    const [loading, setLoading] = useState(false);

    const handleClick = (button) => {
        if (button !== activeButton) {
            setActiveButton(button);
        }
    };

    function wrongUsername() {
        toast.warn('I think!! your username is not correct', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
    function handleInputChange(e) {
        setUserName(e.target.value);
    }


    function handleSubmit(e) {
        e.preventDefault();

        setLoading(true); // Start loading when fetching data
        // Make an HTTP request to your backend
        axios.get(`https://leetcode-wrapped-api.vercel.app/${userName}`)
            .then(response => {
                // Set the received data in state
                setUserData(response.data);
                setLoading(false); // Stop loading after data is fetched
            })
            .catch(error => {
                wrongUsername()
                setLoading(false); // Stop loading after data is fetched
                console.error('Error fetching data:', error);
            });
    }
    return (
        <div className='h-screen w-screen'>
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
                    <h1 className="nunito text-white font-bold text-xl sm:text-2xl">
                        <strong className='nunito-bold text-3xl sm:text-4xl  '>2023 </strong>
                        <br className="sm:hidden" />
                        LeetCode <span className='text-blue-400    cedarville'>Wrap-Up</span></h1>
                    <p className="nunito text-gray-200 text-base  hidden sm:block">Review your LeetCode activity from the past year</p>
                </div>
            </div>
            <div style={{ height: '0.5px', backgroundColor: '#E0E0E0' }} className="h-[0.5px] bg-white" />

            {/* Input bar */}

            <div className=' flex items-center justify-center'>
                <input onChange={handleInputChange} type="text" placeholder="Generate Your LeetCode-Wrap" className="my-2 w-[250px] input input-bordered input-warning " />
                <button disabled={loading} onClick={handleSubmit} className={`${userName.trim() === '' ? 'pointer-events-none opacity-50' : ''}btn btn-outline btn-accent ml-3`}>Generate</button>
            </div>

            {/* Community Stat */}
            {
                loading ? <SkeletonWrapped /> :
                    <>
                        <div className='flex items-center justify-center '>
                            <div className="stats shadow flex sm:flex overflow-hidden  sm:w-[550px]  items-center justify-center rounded-none">
                                <div className='flex'>
                                    <div className="stat ">
                                        <div className="stat-figure text-primary">
                                        </div>
                                        <div className="stat-title ">Hey!</div>
                                        <div className="stat-value text-[#FF8866]">{userData?.fullName.split(' ')[0]}</div>
                                        <div className="stat-desc">How was your 2023?</div>
                                    </div>

                                    <div className="stat pl-3">
                                        <div className="stat-figure text-secondary">
                                            <div className="avatar">
                                                <div className="w-16 rounded-full">
                                                    <img src={userData?.imageUrl} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="stat-value">{userData?.questionsDone}%</div>
                                        <div className="stat-title">Questions Done</div>
                                        <div className="stat-desc text-[secondary]">{userData?.questionsRemain}% Questions remains</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="flex sm:flex-col items-center justify-center">
                            {/* Div 2 */}
                            <div className="stats shadow flex sm:flex-col overflow-hidden sm:w-[550px]  items-center justify-center rounded-none">
                                <div className='sm:flex '>
                                    <div className="stat">
                                        <div className="stat-figure text-secondary">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                        </div>
                                        <div className="stat-title">Profile Views</div>
                                        <div className="stat-value text-secondary">{userData?.Views}</div>
                                        <div className="stat-desc">Total Profile Views</div>
                                    </div>
                                    <div className="stat">
                                        <div className="stat-figure text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                        </div>
                                        <div className="stat-title">Solutions</div>
                                        <div className="stat-value text-primary">{userData?.Solution}</div>
                                        <div className="stat-desc">Total Solutions</div>
                                    </div>
                                    <div className="stat">
                                        <div className="stat-figure text-primary">
                                            <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z" stroke="#FCD53F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                        </div>
                                        <div className="stat-title ">Reputation</div>
                                        <div className="stat-value text-[#FCD53F]">{userData?.Reputation}</div>
                                        <div className="stat-desc">Total Reputataion</div>
                                    </div>
                                </div>
                            </div>


                            {/* Div 3 */}
                            <div className="stats shadow flex sm:flex-col overflow-hidden sm:w-[550px] items-center justify-center rounded-none ">
                                <div className='sm:flex '>
                                    <div className="stat">
                                        <div className="stat-figure text-secondary">
                                            <svg
                                                width="32px"
                                                height="32px"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path
                                                        d="M17 17H17.01M15.6 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3 15.2346C3.15224 14.7446 3.35523 14.3552 3.15224 14.1522C3 14 3 14 3 14H8.4M12 15V4M12 4L15 7M12 4L9 7"
                                                        stroke="#03AAEE"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="stat-title ">Submissions</div>
                                        <div className="stat-value text-[#03AAEE]">{userData?.Solution}</div>
                                        <div className="stat-desc">Total Submission</div>
                                    </div>
                                    <div className="stat">
                                        <div className="stat-figure text-primary">
                                            <svg
                                                fill="#00A96E"
                                                height="32px"
                                                width="32px"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 24 24"
                                                xmlSpace="preserve"
                                                stroke="#00A96E"
                                            >
                                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <g id="active">
                                                        <path d="M8.6,20.1l-7.8-8l1.4-1.4l6.4,6.5L21.8,3.9l1.4,1.4L8.6,20.1z"></path>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="stat-title">Active Days</div>
                                        <div className="stat-value text-[#00A96E]">{userData?.activeDays}</div>
                                        <div className="stat-desc">Total Active Days</div>
                                    </div>
                                    <div className="stat">
                                        <div className="stat-figure text-primary">
                                            <svg
                                                width="32px"
                                                height="32px"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path
                                                        d="M3 5.5L5 3.5M21 5.5L19 3.5M12 8.5V12.5L14 14.5M20 12.5C20 16.9183 16.4183 20.5 12 20.5C7.58172 20.5 4 16.9183 4 12.5C4 8.08172 7.58172 4.5 12 4.5C16.4183 4.5 20 8.08172 20 12.5Z"
                                                        stroke="#B2F302"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="stat-title ">Max Streak</div>
                                        <div className="stat-value text-[#B2F302]">{userData?.maxStreak}</div>
                                        <div className="stat-desc">Overall Max Streak</div>
                                    </div>
                                </div>
                            </div>

                            {/* Div 4 */}
                            {/* <div className='md:flex  h-auto w-full flex-1 items-center justify-center'>
                                {
                                    userData?.svgHtml
                                    // <div dangerouslySetInnerHTML={{ __html: userData?.svgHtml }} />
                                }
                            </div> */}
                        </div>
                    </>
            }

            {/* Bottom navigation */}
            <div className="btm-nav bg-inherit">

                <Link to="/" >
                    <button
                        className={`text-accent flex gap-1 ${activeButton === 'button1' ? 'active' : ''}`}
                        onClick={() => handleClick('button1')}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        <span className='hidden sm:block'>Home</span>
                    </button>
                </Link>

                <button
                    className={`text-accent bg-inherit   ${activeButton === 'profile' ? 'active' : ''}`}
                    onClick={() => handleClick('profile')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </button>

                <a target="_blank" rel="noopener noreferrer" href="https://github.com/druvkotwani/Leetcode-Profiles/">
                    <button className={`text-accent flex gap-1  ${activeButton === 'button2' ? 'active' : ''}`} onClick={() => handleClick('button2')}>
                        <svg
                            width="22px"
                            height="22px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
                                stroke="#00CDB7"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                        <span className='hidden sm:block'>Contribute</span>
                    </button>
                </a>
            </div >
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    )
}

export default LeetCodeWrapped