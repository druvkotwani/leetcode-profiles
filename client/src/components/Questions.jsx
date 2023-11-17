import Line from './Line'

const Questions = ({ type, solved, beats, line, line2, total }) => {
    return (


        <div>
            <div className='flex justify-between w-[250px] mb-1'>
                <div className='flex items-center'>
                    <p className='w-[53px] text-[#9FA0A5]'>{type}</p>
                    <div className="flex flex-1 items-center">
                        <span className="ml-[19px] mr-[5px] text-base font-medium leading-[20px] text-[#FFFEFE]">{solved}</span>
                        <span className="text-xs font-medium text-[#626367]">/{total}</span>
                    </div>
                </div >
                <p className="space-x-1.5"><span className='text-[#9FA0A5]'>Beats</span>
                    <span className="font-medium text-[#BDBFC2]">{beats}</span>
                </p>
            </div>
            <Line color={line} total={total} solved={solved} line2={line2} />
        </div>
    )
}

export default Questions