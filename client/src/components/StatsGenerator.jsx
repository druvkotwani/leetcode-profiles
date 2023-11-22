import Questions from "./Questions";
import Circle from "./Circle";
import { useState } from "react";
import axios from "axios";
import Profile from "./Profile";
import About from "./About";
import { getDoc, collection, setDoc, doc } from "firebase/firestore";
import { firestore } from "../firebase";

export default function StatsGenerator() {

    const [userName, setUserName] = useState('');

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

    const addData = async () => {
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
                console.log("User data added to Firestore successfully!");
            } else {
                console.log("User data already exists in Firestore.");
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

        // Make an HTTP request to your backend
        axios.get(`http://localhost:8000/${userName}`)
            .then(response => {
                // Set the received data in state
                setUserData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }



    return (
        <div className="flex justify-center flex-col items-center h-screen">
            <div className="rounded-lg w-[95%] sm:w-[65%] md:w-[50%] lg:w-[35%] xl:w-[30%]  h-[270px] bg-[#292829] mb-5">

                <div className="flex items-center justify-around ">
                    <Profile userData={userData} />
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


            </div>
            <input type="text" onChange={handleInputChange} className="w-[250px] h-[40px] rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent mt-5" />
            <div className="flex gap-3">
                <button onClick={handleSubmit} className="w-[100px] h-[40px] rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent mt-5 text-[#FFFEFE]">Submit</button>
                <button onClick={addData} className="w-[150px] h-[40px] rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent mt-5 text-[#FFFEFE]">Add To Homepage</button>
            </div>
        </div>

    )
}

