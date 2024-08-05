import Image from "next/image";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

export default function Home() {
  return (
    <section className="px-4 lg:px-24 pb-16 ">
      <Navbar />

      <div className="mt-32  place-items-center grid grid-cols-1 md:grid-cols-2 gap-y-8 xl:grid-cols-3 font-sourcecodepro gap-x-4">
        {[Array.from({ length: 12 }, (_, i) => <Card key={i} />)]}
      </div>
    </section>
  );
}
