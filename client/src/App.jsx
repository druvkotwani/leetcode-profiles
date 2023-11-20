import Questions from "./components/Questions";
import Circle from "./components/Circle";
import { useState } from "react";
import axios from "axios";
import Profile from "./components/Profile";
import About from "./components/About";

export default function App() {

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

  const [userData, setUserData] = useState({
    profileData: defaultProfileData,
    questionData: null,
    aboutData: defaultAboutUs,
  });

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

  const total = userData?.questionData?.totalSolved || 277;


  return (
    <div className="flex justify-center flex-col items-center h-screen">

      <div className="rounded-lg w-[95%] sm:w-[65%] md:w-[50%] lg:w-[35%] xl:w-[30%]  h-[270px] bg-[#292829] mb-5">

        <div className="flex items-center justify-around ">
          <Profile userData={userData} />
          <About result={userData.aboutData} />
        </div>
        <div style={{ height: '0.5px', backgroundColor: '#E0E0E0' }} className="" />
        <div className=" flex lg:flex-row gap-5 items-center justify-center mt-4">
          <Circle total={total} />
          <div className="flex flex-col gap-3">
            <Questions
              type={'Easy'}
              solved={userData?.questionData?.easySolved || 165}
              total={userData?.questionData?.easyTotal || 745}
              beats={userData?.questionData?.easyBeats || '96.9%'}
              line={userData?.questionData?.line || 'bg-[#2db55d26]'}
              line2={userData?.questionData?.line2 || 'bg-[#01B8A2]'}
            />
            <Questions
              type={'Medium'}
              solved={userData?.questionData?.mediumSolved || 92}
              total={userData?.questionData?.mediumTotal || 1547}
              beats={userData?.questionData?.mediumBeats || '84.8%'}
              line={userData?.questionData?.line || 'bg-[#ffb80026]'}
              line2={userData?.questionData?.line2 || 'bg-[#FFC11F]'}
            />
            <Questions
              type={'Hard'}
              solved={userData?.questionData?.hardSolved || 20}
              total={userData?.questionData?.hardTotal || 644}
              beats={userData?.questionData?.hardBeats || "77.6%"}
              line={userData?.questionData?.line || 'bg-[#ef474326]'}
              line2={userData?.questionData?.line2 || 'bg-[#EF4642]'}
            />
          </div>
        </div>


      </div>
      <input type="text" onChange={handleInputChange} className="w-[250px] h-[40px] rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent mt-5" />
      <button onClick={handleSubmit} className="w-[150px] h-[40px] rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent mt-5 text-[#FFFEFE]">Submit</button>
    </div>

  )
}

