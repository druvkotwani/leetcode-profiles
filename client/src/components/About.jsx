
const About = ({ result }) => {
    return (
        <div className="mt-4 mb-2 justify-self-start">

            {/* <p className="flex">
                <iconify-icon icon="carbon:location" width="17" height="19" style={{ color: 'white', marginRight: '5px' }}></iconify-icon>
                <span className='text-sm text-[#BDBEC3] '>India</span>
            </p> */}
            {
                result?.website?.link && (<a target="_blank" rel='noreferrer' href={result?.website?.link} className="flex">
                    <iconify-icon icon="streamline-emojis:globe-showing-americas" style={{ color: 'white', marginRight: '1px' }} width="19" height="19"></iconify-icon>
                    <span className='text-sm text-[#BDBEC3] '>
                        <p className="">{result?.website?.text}</p>
                    </span>
                </a>)
            }
            {
                result?.github?.link && (<a target="_blank" rel='noreferrer' href={result?.github?.link} className="flex">
                    <iconify-icon icon="mdi:github" style={{ color: 'white', marginRight: '5px' }} width="17" height="19"></iconify-icon>
                    <span className='text-sm text-[#BDBEC3] '>
                        <p className="">{result?.github?.text}</p>
                    </span>
                </a>)
            }
            {
                result?.twitter?.link && (<a target="_blank" rel='noreferrer' href={result?.twitter?.link} className="flex">
                    <iconify-icon icon="fa6-brands:square-x-twitter" style={{ color: 'white', marginRight: '5px' }} width="17" height="19"></iconify-icon>
                    <span className='text-sm text-[#BDBEC3] '>
                        <p className="">{result?.twitter?.text}</p>
                    </span>
                </a>)
            }
            {
                result?.linkedin?.link && (<a target="_blank" rel='noreferrer' href={result?.linkedin?.link} className="flex">
                    <iconify-icon icon="devicon:linkedin" style={{ color: 'white', marginRight: '5px' }} width="17" height="19  "></iconify-icon>
                    <span className='text-sm text-[#BDBEC3] '>
                        <p className="">{result?.linkedin?.text}</p>
                    </span>
                </a>
                )
            }
        </div>
    )
}

export default About