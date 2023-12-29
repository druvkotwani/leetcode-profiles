import Navbar from "./components/Navbar";
import Stat from "./components/Stat";
import StatsGenerator from "./components/StatsGenerator";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { firestore } from "./firebase";
import { motion } from "framer-motion";

import "./App.css";

export default function App() {
  const [showStats, setShowStats] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const dataCollection = collection(firestore, "users_stats");
        const unsubscribe = onSnapshot(dataCollection, (snapshot) => {
          const dataList = snapshot.docs.map((doc) => doc.data());
          setData(dataList);
          setFilteredData(dataList);
        });
        // Return a cleanup function to unsubscribe from the snapshot listener when the component unmounts
        return () => unsubscribe();
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  const handleSearch = (query) => {
    const filtered = data.filter((item) =>
      item.username.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  useEffect(() => {
    // Set an interval to toggle the animation class every 5 seconds
    const interval = setInterval(() => {
      const button = document.querySelector(".animated-button");
      if (button) {
        button.classList.toggle("animate");
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="h-screen overflow-x-hidden">
        <button onClick={() => setShowStats(prevShowStats => !prevShowStats)}
          className="z-50 fixed w-12 h-12 bottom-0 right-0 lg:right-3 m-4 rounded-md bg-[#0e0e0e] text-white hover:bg-[#292829] border border-gray-600 px-3 py-2 text-sm font-bold shadow-white   animated-button">
          <svg width="95" height="111" viewBox="0 0 95 111" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto max-w-none">
            <path d="M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z" fill="#FFA116"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z" fill="#B3B3B3"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z" fill="white"></path>
          </svg>
        </button>
        <Navbar onSearch={handleSearch} />
        <div className="flex flex-col mx-auto max-w-screen-xl px-2 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 py-4 ">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {
                filteredData.map((data, index) => (
                  // displaying each stat
                  <>
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 110, delay: (index % 4) * 0.3 }}
                    >
                      <Stat key={data.username} data={data} />
                    </motion.div>

                  </>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      {showStats && (
        <div className="modal-overlay" onClick={() => setShowStats(false)}>
          <div className="w-full" onClick={(e) => e.stopPropagation()}>
            <StatsGenerator setShowStats={setShowStats} />
          </div>
        </div>

      )}
    </>
  )
}

