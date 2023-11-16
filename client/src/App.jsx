import Questions from "./components/Questions";
import Line from "./components/Line";
import Circle from "./components/Circle";

export default function App() {
  return (

    <>
      <div className="flex justify-center items-center h-screen">
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
      </div>
    </>




  )
}