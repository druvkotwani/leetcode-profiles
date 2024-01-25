import '../../App.css';
import '../../index.css'
import { Link } from 'react-router-dom';
const WorthAlert = () => {

    const closeAlert = () => {
        const alert = document.getElementById('alert');
        alert.style.display = 'none';
    };

    return (
        <div id="alert">
            <span className="mr-4 text-white font-bold float-right text-2xl cursor-pointer transition duration-300" onClick={closeAlert}>
                &times;
            </span>
            <div className="flex sm:gap-4 items-center justify-center">
                <div className="flex gap-2 sm:gap-4 items-center justify-center p-4 ">
                    {/* icon */}
                    <div className='glowing-icon'>
                        <iconify-icon icon="noto-v1:money-bag" width="62" height="62"></iconify-icon>
                    </div>

                    {/* Text */}
                    <div className=" flex flex-col justify-center ">
                        <h1 className="flex gap-2 font-[poppins] text-white font-medium text-2xl sm:text-3xl">
                            LeetCode
                            <span className='nunito-bold text-3xl sm:text-4xl text-yellow-400 cedarville'> Worth</span>
                        </h1>

                        <p className="hidden sm:block font-[poppins] text-gray-200 text-xs   sm:text-base ">Calculate the Real Worth of Your Hours Spent on DSA!</p>
                    </div>
                </div>
                <div style={{ height: '0.5px', backgroundColor: '#E0E0E0' }} className="h-[0.5px] bg-white" />

                {/* Button */}
                <Link to="/leetcodeWorth">
                    <button className="ml-1 btn btn-outline btn-warning sm:hidden">💸</button>
                    <button className="ml-1 btn btn-outline btn-warning hidden sm:block">Explore💸</button>
                </Link>

            </div>

        </div >
    );
};

export default WorthAlert;
