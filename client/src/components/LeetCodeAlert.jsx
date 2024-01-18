import '../App.css';
import '../index.css'
import { Link } from 'react-router-dom';
const Alert = () => {

    const closeAlert = () => {
        const alert = document.getElementById('alert');
        alert.style.display = 'none';
    };

    return (
        <div id="alert">
            <span className="mr-4 text-white font-bold float-right text-2xl cursor-pointer transition duration-300" onClick={closeAlert}>
                &times;
            </span>
            <div className="flex sm:gap-4 items-center justify-center p-4">
                {/* SVG */}
                <div className="flex h-12   w-24 relative overflow-hidden ">
                    <svg width="50" height="50" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="snow-main snow">
                        <path d="M22 0.400024C23.1172 0.400024 24.0625 1.34534 24.0625 2.46252V6.50159L26.0391 4.52502C26.8125 3.66565 28.1016 3.66565 28.875 4.52502C29.7344 5.29846 29.7344 6.58752 28.875 7.36096L23.9766 12.2594V18.8766L29.7344 15.611L31.5391 8.90784C31.7969 7.79065 32.9141 7.18909 34.0312 7.4469C35.1484 7.70471 35.75 8.90784 35.4922 9.93909L34.8047 12.6891L37.9844 10.7985C38.9297 10.2828 40.2188 10.6266 40.7344 11.5719C41.3359 12.6031 40.9922 13.8063 40.0469 14.4078L36.8672 16.2125L39.5312 16.986C40.6484 17.2438 41.25 18.361 40.9922 19.4781C40.7344 20.5953 39.5312 21.1969 38.5 20.9391L31.7969 19.1344L26.125 22.4L31.7969 25.7516L38.5 23.9469C39.5312 23.6031 40.7344 24.2906 40.9922 25.4078C41.25 26.525 40.6484 27.6422 39.5312 27.9L36.8672 28.6735L40.0469 30.4781C40.9922 31.0797 41.3359 32.2828 40.7344 33.3141C40.2188 34.2594 38.9297 34.6031 37.9844 34.0875L34.8047 32.1969L35.4922 34.9469C35.75 36.0641 35.1484 37.1813 34.0312 37.4391C32.9141 37.7828 31.7969 37.0953 31.5391 35.9781L29.7344 29.275L24.0625 26.0094V32.6266L28.9609 37.525C29.7344 38.2985 29.7344 39.5875 28.9609 40.361C28.1016 41.2203 26.8125 41.2203 26.0391 40.361L24.0625 38.3844V42.3375C24.0625 43.5406 23.1172 44.4 22 44.4C20.7969 44.4 19.9375 43.5406 19.9375 42.3375V38.3844L17.9609 40.361C17.1016 41.2203 15.8125 41.2203 15.0391 40.361C14.1797 39.5875 14.1797 38.2985 15.0391 37.4391L19.9375 32.5406V26.0094L14.2656 29.275L12.4609 35.9781C12.1172 37.0953 11 37.6969 9.88281 37.4391C8.76562 37.1813 8.16406 35.9781 8.42188 34.9469L9.19531 32.1969L5.92969 34.0875C4.98438 34.6031 3.69531 34.2594 3.17969 33.3141C2.57812 32.2828 2.92188 31.0797 3.86719 30.4781L7.13281 28.6735L4.38281 27.9C3.26562 27.6422 2.66406 26.525 2.92188 25.4078C3.17969 24.2906 4.38281 23.6031 5.41406 23.9469L12.1172 25.7516L17.875 22.4L12.1172 19.1344L5.41406 20.9391C4.38281 21.1969 3.17969 20.5953 2.92188 19.4781C2.66406 18.361 3.26562 17.2438 4.38281 16.986L7.13281 16.2125L3.86719 14.4078C2.92188 13.8063 2.57812 12.6031 3.17969 11.5719C3.69531 10.6266 4.98438 10.2828 5.92969 10.7985L9.19531 12.6891L8.42188 9.93909C8.16406 8.8219 8.76562 7.70471 9.88281 7.4469C11 7.10315 12.1172 7.79065 12.4609 8.90784L14.1797 15.611L19.9375 18.8766V12.2594L15.0391 7.36096C14.1797 6.58752 14.1797 5.29846 15.0391 4.52502C15.8125 3.66565 17.1016 3.66565 17.875 4.52502L19.8516 6.50159V2.46252C19.8516 1.34534 20.7969 0.400024 21.9141 0.400024H22Z" fill="url(#paint0_linear_1644_359)"></path>
                        <defs>
                            <linearGradient id="paint0_linear_1644_359" x1="22" y1="-0.0999756" x2="22" y2="43.9" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#64D2FF" stopOpacity="0.52"></stop>
                                <stop offset="1" stopColor="#64D2FF"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg width="20" height="20" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="snow-sm snow hidden sm:block">
                        <path d="M22 0.400024C23.1172 0.400024 24.0625 1.34534 24.0625 2.46252V6.50159L26.0391 4.52502C26.8125 3.66565 28.1016 3.66565 28.875 4.52502C29.7344 5.29846 29.7344 6.58752 28.875 7.36096L23.9766 12.2594V18.8766L29.7344 15.611L31.5391 8.90784C31.7969 7.79065 32.9141 7.18909 34.0312 7.4469C35.1484 7.70471 35.75 8.90784 35.4922 9.93909L34.8047 12.6891L37.9844 10.7985C38.9297 10.2828 40.2188 10.6266 40.7344 11.5719C41.3359 12.6031 40.9922 13.8063 40.0469 14.4078L36.8672 16.2125L39.5312 16.986C40.6484 17.2438 41.25 18.361 40.9922 19.4781C40.7344 20.5953 39.5312 21.1969 38.5 20.9391L31.7969 19.1344L26.125 22.4L31.7969 25.7516L38.5 23.9469C39.5312 23.6031 40.7344 24.2906 40.9922 25.4078C41.25 26.525 40.6484 27.6422 39.5312 27.9L36.8672 28.6735L40.0469 30.4781C40.9922 31.0797 41.3359 32.2828 40.7344 33.3141C40.2188 34.2594 38.9297 34.6031 37.9844 34.0875L34.8047 32.1969L35.4922 34.9469C35.75 36.0641 35.1484 37.1813 34.0312 37.4391C32.9141 37.7828 31.7969 37.0953 31.5391 35.9781L29.7344 29.275L24.0625 26.0094V32.6266L28.9609 37.525C29.7344 38.2985 29.7344 39.5875 28.9609 40.361C28.1016 41.2203 26.8125 41.2203 26.0391 40.361L24.0625 38.3844V42.3375C24.0625 43.5406 23.1172 44.4 22 44.4C20.7969 44.4 19.9375 43.5406 19.9375 42.3375V38.3844L17.9609 40.361C17.1016 41.2203 15.8125 41.2203 15.0391 40.361C14.1797 39.5875 14.1797 38.2985 15.0391 37.4391L19.9375 32.5406V26.0094L14.2656 29.275L12.4609 35.9781C12.1172 37.0953 11 37.6969 9.88281 37.4391C8.76562 37.1813 8.16406 35.9781 8.42188 34.9469L9.19531 32.1969L5.92969 34.0875C4.98438 34.6031 3.69531 34.2594 3.17969 33.3141C2.57812 32.2828 2.92188 31.0797 3.86719 30.4781L7.13281 28.6735L4.38281 27.9C3.26562 27.6422 2.66406 26.525 2.92188 25.4078C3.17969 24.2906 4.38281 23.6031 5.41406 23.9469L12.1172 25.7516L17.875 22.4L12.1172 19.1344L5.41406 20.9391C4.38281 21.1969 3.17969 20.5953 2.92188 19.4781C2.66406 18.361 3.26562 17.2438 4.38281 16.986L7.13281 16.2125L3.86719 14.4078C2.92188 13.8063 2.57812 12.6031 3.17969 11.5719C3.69531 10.6266 4.98438 10.2828 5.92969 10.7985L9.19531 12.6891L8.42188 9.93909C8.16406 8.8219 8.76562 7.70471 9.88281 7.4469C11 7.10315 12.1172 7.79065 12.4609 8.90784L14.1797 15.611L19.9375 18.8766V12.2594L15.0391 7.36096C14.1797 6.58752 14.1797 5.29846 15.0391 4.52502C15.8125 3.66565 17.1016 3.66565 17.875 4.52502L19.8516 6.50159V2.46252C19.8516 1.34534 20.7969 0.400024 21.9141 0.400024H22Z" fill="url(#paint0_linear_1644_359)"></path>
                        <defs>
                            <linearGradient id="paint0_linear_1644_359" x1="22" y1="-0.0999756" x2="22" y2="43.9" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#64D2FF" stopOpacity="0.52"></stop>
                                <stop offset="1" stopColor="#64D2FF"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg width="14" height="14" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="snow-xs snow hidden sm:block">
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
                        <strong className='nunito-bold text-3xl '>2023 </strong>
                        LeetCode <span className='text-blue-400    cedarville'>Wrap-Up</span></h1>
                    <p className="nunito text-gray-200 text-base hidden sm:block">Review your LeetCode activity from the past year</p>
                </div>

                {/* Button */}
                <Link to="/wrapped">
                    <button className="ml-1 btn btn-outline btn-info sm:hidden">✈️</button>
                    <button className="ml-1 btn btn-outline btn-info hidden sm:block">Explore✈️</button>
                </Link>

            </div>
        </div >
    );
};

export default Alert;
