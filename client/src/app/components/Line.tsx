import Line2 from "./Line2";

const Line = ({ color, total, solved, line2 }: any) => {
  const percentage = Math.round((solved / total) * 100);
  const width = (percentage / 100) * 250;
  return (
    <div className={`rounded-lg h-[9px] w-[200px] ${color}`}>
      <Line2 width={width} line2={line2} />
    </div>
  );
};

export default Line;
