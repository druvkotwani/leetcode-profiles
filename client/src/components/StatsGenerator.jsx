import Questions from "./Questions";
import Circle from "./Circle";
import { useState } from "react";
import axios from "axios";
import Profile from "./Profile";
import About from "./About";
import { getDoc, collection, setDoc, doc } from "firebase/firestore";
import { firestore } from "../firebase";
import Skeleton from "./Skeleton";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as htmlToImage from 'html-to-image';

export default function StatsGenerator({ setShowStats }) {
    const [userName, setUserName] = useState('');
    const [loading, setLoading] = useState(false);

    const defaultProfileData = {
        image: '/assets/profile.png',
        fullName: 'Dhruv Kotwani',
        username: 'druv_kotwani',
        badgeImg: '/assets/badge.png',
        rank: '234, 542',
    };

    let defaultAboutUs = {
        linkedin: { link: "https://linkedin.com/in/dhruv-kotwani", text: "dhruv-kotwani" },
        twitter: { link: "https://twitter.com/druv_kotwani", text: "druv_kotwani" },
        github: { link: "https://github.com/druvkotwani", text: "druvkotwani" },
        website: { link: "https://dhruvkotwani.me", text: "dhruvkotwani.me" }
    };

    const defaultQuestionData = {
        easySolved: 165,
        easyTotal: 745,
        easyBeats: '96.9%',
        mediumSolved: 92,
        mediumTotal: 1547,
        mediumBeats: '84.8%',
        hardSolved: 20,
        hardTotal: 644,
        hardBeats: '77.6%',
        totalSolved: 277,
        totalQuestions: 2936,
    };

    const [userData, setUserData] = useState({
        profileData: defaultProfileData,
        questionData: defaultQuestionData,
        aboutData: defaultAboutUs,
    });

    const transformUserData = (userData) => {
        const transformedData = {
            fullName: userData.profileData.fullName,
            image: userData.profileData.image,
            username: userData.profileData.username,
            badgeImg: userData.profileData.badgeImg || '',
            rank: userData.profileData.rank,
            easySolved: userData.questionData.easySolved,
            easyTotal: userData.questionData.easyTotal,
            easyBeats: userData.questionData.easyBeats,
            mediumSolved: userData.questionData.mediumSolved,
            mediumTotal: userData.questionData.mediumTotal,
            mediumBeats: userData.questionData.mediumBeats,
            hardSolved: userData.questionData.hardSolved,
            hardTotal: userData.questionData.hardTotal,
            hardBeats: userData.questionData.hardBeats,
            totalSolved: userData.questionData.totalSolved,
            totalQuestions: userData.questionData.totalQuestions,
            linkedin: userData.aboutData.linkedin,
            twitter: userData.aboutData.twitter,
            github: userData.aboutData.github,
            website: userData.aboutData.website,
        };
        return transformedData;
    };

    function dataThere() {
        toast.error('Oyee! Your profile is already there', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
    function dataAdded() {
        toast.success('Bhadhai ho! Profile added successfully', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

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


    const addData = async (e) => {
        e.preventDefault();
        try {
            const transformedUserData = transformUserData(userData);
            const dataCollection = collection(firestore, "users_stats")
            // Create a reference to the document based on a unique field (e.g., username)
            const docRef = doc(dataCollection, transformedUserData.username);

            // Check if the document already exists
            const docSnapshot = await getDoc(docRef);

            if (!docSnapshot.exists()) {
                // Add the data only if it doesn't exist
                await setDoc(docRef, transformedUserData);
                // console.log("User data added to Firestore successfully!");
                dataAdded()

            } else {
                console.log("User data already exists in Firestore.");
                dataThere()
            }


        }
        catch (err) {
            console.log(err);
        }
    }

    function handleInputChange(e) {
        setUserName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        setLoading(true); // Start loading when fetching data
        // Make an HTTP request to your backend
        axios.get(`https://leetcode-backend-druvkotwani.vercel.app/${userName}`)
            .then(response => {
                // Set the received data in state
                setUserData(response.data);
                setLoading(false); // Stop loading after data is fetched
            })
            .catch(error => {
                wrongUsername()
                console.error('Error fetching data:', error);
            });
    }

    const downloadAsImage = async () => {
        const element = document.querySelector('.download');

        try {
            const imageUrl = await htmlToImage.toPng(element);
            const a = document.createElement('a');
            a.href = imageUrl;
            a.download = 'downloaded_image.png'; // Set the file name
            a.click();
            console.log('Image downloaded successfully');
        } catch (error) {
            console.error('Error converting div to image:', error);
        }
    };

    return (
        <div className="flex justify-center flex-col items-center">

            {/* Stats */}
            {loading ? (<Skeleton />) : (<div className="download rounded-lg w-[95%] sm:w-[65%] md:w-[50%] lg:w-[35%] xl:w-[30%]  h-[270px] bg-[#292829] mb-5" >
                <div className="flex items-center justify-around ">
                    <Profile userData={userData.profileData} />
                    <About result={userData.aboutData} />
                </div>

                <div style={{ height: '0.5px', backgroundColor: '#E0E0E0' }} className="" />

                <div className=" flex lg:flex-row gap-5 items-center justify-center mt-4">
                    <Circle total={userData.questionData.totalSolved} />
                    <div className="flex flex-col gap-3">
                        <Questions
                            type={'Easy'}
                            solved={userData?.questionData?.easySolved}
                            total={userData?.questionData?.easyTotal}
                            beats={userData?.questionData?.easyBeats}
                            line='bg-[#2db55d26]'
                            line2='bg-[#01B8A2]'
                        />
                        <Questions
                            type={'Medium'}
                            solved={userData?.questionData?.mediumSolved}
                            total={userData?.questionData?.mediumTotal}
                            beats={userData?.questionData?.mediumBeats}
                            line='bg-[#ffb80026]'
                            line2='bg-[#FFC11F]'
                        />
                        <Questions
                            type={'Hard'}
                            solved={userData?.questionData?.hardSolved}
                            total={userData?.questionData?.hardTotal}
                            beats={userData?.questionData?.hardBeats}
                            line='bg-[#ef474326]'
                            line2='bg-[#EF4642]'
                        />
                    </div>
                </div>

            </div >)
            }


            {/* Buttons + Input */}
            <div className="flex gap-2">
                <form className="flex items-center w-80" onSubmit={handleSubmit}>
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <input onChange={handleInputChange} type="text" id="simple-search" className="border border-gray text-sm rounded-lg block shadow w-full pl-3 p-2.5  bg-[#0e0e0e]  border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Enter the username to Generate Stats..." required="" />
                    </div>
                </form>
                <button onClick={downloadAsImage} disabled={loading}><iconify-icon icon="flat-color-icons:download" style={{ color: 'white', marginRight: '5px' }} width="25" height="29"></iconify-icon></button>
            </div>

            <div className="flex gap-3 mt-3">
                <button onClick={handleSubmit} className={`${userName.trim() === '' ? 'pointer-events-none opacity-50' : ''} rounded-md bg-[#0e0e0e] text-white hover:bg-[#292829] border  border-gray-600 px-4 py-2 text-base font-bold shadow`}>Generate Stats</button>
                <button onClick={addData} className={`${userName.trim() === '' ? 'pointer-events-none opacity-50' : ''} rounded-md bg-[#0e0e0e] text-white hover:bg-[#292829] border  border-gray-600 px-4 py-2 text-base font-bold shadow`}>Add To HallOfFame</button>
            </div>
            <button onClick={() => setShowStats(false)} className="mt-2">
                <iconify-icon icon="line-md:close-small" width="60" height="60"></iconify-icon>
            </button>
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
        </div >

    )
}

