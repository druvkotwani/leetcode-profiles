

export default function PromotedCard() {

    return (
        <a href="https://leetcode.com/contest/weekly-contest-259/" rel="noreferrer" target="_blank" className="hover:scale-105 transition-transform duration-300  " >
            <div className="flex justify-center flex-col items-center rounded-lg h-[280px] bg-[#292829]">
                <div>
                    <div className="flex gap-1 xl:gap-4 items-center justify-between ">
                        {/* Profile */}
                        <div className="flex items-center text-white justify-center px-4 py-1  w-full gap-2 mb-2  rounded-md">
                            <img
                                alt="nextui logo"
                                className="rounded-full"
                                height={26}
                                radius="sm"
                                src={`/assets/leetcode.png`}
                                width={26}
                            />
                            <h4 className="font-bold text-large SourceCodePro">LeetCode Profiles</h4>
                        </div>

                    </div>
                    <div style={{ height: '0.5px', backgroundColor: '#E0E0E0' }} className="h-[0.5px] bg-white" />

                    <div className=" flex lg:flex-row gap-5 items-center justify-center mt-4 w-full">
                        {/* Circle */}

                        <p className="text-xs text-white uppercase font-bold SourceCodePro mx-auto mt-2 bg-gray-600  px-16 py-2 rounded-md ">
                            Promoted
                        </p>

                    </div>



                </div>
            </div>
        </a>

    )
}

