import "react-toastify/dist/ReactToastify.css";
import Heatmap from "../components/Heatmap";
import Navbar from "../components/Navbar";

const Page = () => {
  return (
    <div className="relative">
      <Navbar searchBarPresent={false} />

      <Heatmap />
    </div>
  );
};

export default Page;
