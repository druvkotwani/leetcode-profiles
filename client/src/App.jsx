import Questions from "./components/Questions";
import Circle from "./components/Circle";
import { useState } from "react";

export default function App() {

  const [userName, setUserName] = useState('');

  function handleInputChange(e) {
    setUserName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userName)

  }

  console.log(userName)
  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <div className="flex items-center justify-center rounded-lg w-[30%] xl:h-[186px] min-h-[186px] bg-[#eee]">

        <div className=" flex items-center justify-center ">
          <Circle />
          <div className="flex flex-col">
            <Questions type={'Easy'} solved={165} total={745} beats={96.9} line={'bg-[#2db55d26]'} />
            <Questions type={'Medium'} solved={92} total={1547} beats={84.8} line={'bg-[#ffb80026]'} />
            <Questions type={'Hard'} solved={20} total={644} beats={77.6} line={'bg-[#ef474326]'} />
          </div>
        </div>

      </div>
      <input type="text" onChange={handleInputChange} className="w-[250px] h-[40px] rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent mt-5" />
      <button onClick={handleSubmit} className="w-[150px] h-[40px] rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent mt-5">Submit</button>
    </div>

  )
}

