const Line2 = ({ width, line2 }: any) => {
  const divStyle = {
    width: `${width}px`,
  };

  return (
    <div
      style={divStyle}
      className={`bg-[#01B8A2] rounded-lg h-[9px] ${line2} `}
    ></div>
  );
};

export default Line2;
