import Image from "next/image";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

export default function Home() {
  return (
    <section className="px-8 lg:px-24 ">
      <Navbar />

      <div className="mt-40 grid grid-cols-3 font-sourcecodepro gap-x-4">
        {[Array.from({ length: 3 }, (_, i) => <Card key={i} />)]}
      </div>
    </section>
  );
}
