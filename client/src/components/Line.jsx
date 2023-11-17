import Line2 from "./Line2"

const Line = ({ color, total, solved, line2 }) => {
    const percentage = Math.round((solved / total) * 100);
    const width = (percentage / 100) * 250;
    console.log(width);
    return (
        <div className={`rounded-lg h-[9px] w-[250px] ${color}`} >
            <Line2 width={width} line2={line2} />
        </div>
    )
}

export default Line