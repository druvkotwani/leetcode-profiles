const Circle = ({ total }: any) => {
  const circumference = 2 * Math.PI * 46;
  const percentage = (total / 2936) * 100;
  const dashLength = circumference * (percentage / 100);

  return (
    <div className="mt-4 flex min-w-[100px] justify-center ">
      <div className="shrink-1 z-base relative max-h-[100px] max-w-[100px]">
        <svg
          className="h-full w-full origin-center -rotate-90 transform"
          viewBox="0 0 100 100"
        >
          <circle
            fill="none"
            cx="50px"
            cy="50px"
            r="46"
            strokeWidth="3"
            strokeLinecap="round"
            stroke="#4B4A4B"
            className=" w-[100px]"
          ></circle>
          {dashLength > 0 ? (
            <circle
              fill="none"
              cx="50px"
              cy="50px"
              r="46"
              strokeWidth="5"
              strokeLinecap="round"
              stroke="#FFC11F"
              className=""
              strokeDasharray={`${dashLength} ${circumference}`}
              strokeDashoffset="0"
              data-difficulty="ALL"
            ></circle>
          ) : (
            ""
          )}
        </svg>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-default text-center">
          <div>
            <div className="text-[24px] font-medium text-[#FFFEFE]">
              {total}
            </div>
            <div className="whitespace-nowrap text-xs text-label-3 text-[#9FA0A5]">
              Solved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Circle;
