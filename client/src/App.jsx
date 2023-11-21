import Stat from "./components/Stat";
import StatsGenerator from "./components/StatsGenerator";

export default function App() {

  return (
    <div>

      <div className="flex flex-col mx-auto max-w-screen-xl px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 py-4 ">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Stat />
            <Stat />

          </div>
        </div>
      </div>
      <StatsGenerator />

    </div>
  )
}

