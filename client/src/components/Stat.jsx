import Questions from "./Questions";
import Circle from "./Circle";
import { useState, useEffect } from "react";
import Profile from "./Profile";
import About from "./About";

export default function Stat({ data }) {
    const [userData, setUserData] = useState({});

    const setDataManually = () => {
        const newProfileData = {
            fullName: data.fullName,
            image: data.image,
            badgeImg: data.badgeImg,
            username: data.username,
            rank: data.rank,
        };

        const newQuestionData = {
            easySolved: data.easySolved,
            easyTotal: data.easyTotal,
            easyBeats: data.easyBeats,
            mediumSolved: data.mediumSolved,
            mediumTotal: data.mediumTotal,
            mediumBeats: data.mediumBeats,
            hardSolved: data.hardSolved,
            hardTotal: data.hardTotal,
            hardBeats: data.hardBeats,
            totalSolved: data.totalSolved,
            totalQuestions: data.totalQuestions,
        };

        const newAboutData = {
            linkedin: data.linkedin,
            twitter: data.twitter,
            github: data.github,
            website: data.website,
            // Add other about data fields as needed
        }
        setUserData({
            profileData: newProfileData,
            questionData: newQuestionData,
            aboutData: newAboutData,
        });
    }
    useEffect(() => {
        if (data) {
            setDataManually(data);
        }
    }, [data]);



    return (
        <div className="flex justify-center flex-col items-center rounded-lg h-[280px] bg-[#292829]">
            <div>
                <div className="flex gap-1 xl:gap-4 items-center justify-between ">
                    <Profile userData={userData?.profileData} />
                    <About result={userData?.aboutData} />
                </div>
                <div style={{ height: '0.5px', backgroundColor: '#E0E0E0' }} className="h-[0.5px] bg-white" />
                <div className=" flex lg:flex-row gap-5 items-center justify-center mt-4">
                    <Circle total={data?.totalSolved} />
                    <div className="flex flex-col gap-3">
                        <Questions
                            type={'Easy'}
                            solved={data?.easySolved}
                            total={data?.easyTotal}
                            beats={data?.easyBeats}
                            line='bg-[#2db55d26]'
                            line2='bg-[#01B8A2]'
                        />
                        <Questions
                            type={'Medium'}
                            solved={data?.mediumSolved}
                            total={data?.mediumTotal}
                            beats={data?.mediumBeats}
                            line='bg-[#ffb80026]'
                            line2='bg-[#FFC11F]'
                        />
                        <Questions
                            type={'Hard'}
                            solved={data?.hardSolved}
                            total={data?.hardTotal}
                            beats={data?.hardBeats}
                            line='bg-[#ef474326]'
                            line2='bg-[#EF4642]'
                        />
                    </div>
                </div>

            </div>
        </div>

    )
}

