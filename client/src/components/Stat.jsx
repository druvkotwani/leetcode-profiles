import Questions from "./Questions";
import Circle from "./Circle";
import { useState } from "react";
import Profile from "./Profile";
import About from "./About";

export default function Stat() {

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
    };

    const [userData, setUserData] = useState({
        profileData: defaultProfileData,
        questionData: defaultQuestionData,
        aboutData: defaultAboutUs,
    });

    const total = userData?.questionData?.totalSolved || 277;


    return (
        <div className="flex justify-center flex-col items-center rounded-lg h-[280px] bg-[#292829]">
            <div>
                <div className="flex gap-1 xl:gap-4 items-center justify-center ">
                    <Profile userData={userData} />
                    <About result={userData.aboutData} />
                </div>
                <div style={{ height: '0.5px', backgroundColor: '#E0E0E0' }} className="h-[0.5px] bg-white" />
                <div className=" flex lg:flex-row gap-5 items-center justify-center mt-4">
                    <Circle total={total} />
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
        </div>

    )
}

