

export default function PromotedCard({ option }) {

    return (
        <a href="https://github.com/druvkotwani/leetcode-profiles" rel="noreferrer" target="_blank" className="hover:scale-105 transition-transform duration-300  " >
            <div className="flex justify-betwen flex-col  items-center rounded-lg h-[280px] bg-[#292829] ">


                {/* Heading and Logo */}
                <div className="flex gap-1 xl:gap-4 items-center justify-between   ">
                    <div className="flex items-center text-white justify-center px-4 py-2 w-full gap-2   rounded-md">
                        <img
                            alt="nextui logo"
                            className="rounded-full"
                            height={24}
                            radius="sm"
                            src={`/assets/leetcode.png`}
                            width={24}
                        />
                        <h4 className="font-bold text-large SourceCodePro">LeetCode Profiles</h4>
                    </div>
                </div>


                <div className="">
                    <div style={{ height: '0.5px', backgroundColor: '#E0E0E0' }} className="h-[0.5px] bg-white" />

                    <p className=" px-4 text-[#FFFEFE] mt-2 font-medium  text-base xl:text-lg  SourceCodePro">
                        {option.heading}
                    </p>

                    <div className="mx-4 mt-1 ">
                        <img alt="Ad image" src={`/assets/${option.imgSrc}`} className="z-1 w-full rounded-xl  h-40  object-cover" />
                    </div>

                </div>







            </div>
        </a>

    )
}

