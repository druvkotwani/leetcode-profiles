import Questions from "./components/Questions";
import Circle from "./components/Circle";
import { useState } from "react";
import axios from "axios";
import Profile from "./components/Profile";

export default function App() {

  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState(null); // State to hold the fetched data

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

      <div className="rounded-lg w-[80%] lg:w-[30%] xl:h-[486px] h-[486px] bg-[#292829] mb-5">

        <Profile />


        <div className=" flex flex-col lg:flex-row gap-5 items-center justify-center ">
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

