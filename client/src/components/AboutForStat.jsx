
const AboutForStat = ({ result }) => {
    return (
        <div>
            <h1>My Socials:</h1>
            <div className="mt-4 mb-2 flex justify-self-start">

                {/* <p className="flex">
    <iconify-icon icon="carbon:location" width="17" height="19" style={{ color: 'white', marginRight: '5px' }}></iconify-icon>
    <span className='text-sm text-[#BDBEC3] '>India</span>
</p> */}
                {
                    result.website.link && (<p className="flex">
                        <a href={result.website.link} target="_blank" rel='noreferrer' className="">
                            <iconify-icon icon="streamline-emojis:globe-showing-americas" style={{ color: 'white', marginRight: '1px' }} width="22" height="25"></iconify-icon>
                        </a>
                    </p>)
                }
                {
                    result.github.link && (<p className="flex">
                        <a href={result.github.link} target="_blank" rel='noreferrer' className="">
                            <iconify-icon icon="mdi:github" style={{ color: 'white', marginRight: '5px' }} width="22" height="25"></iconify-icon>
                        </a>
                    </p>)
                }
                {
                    result.twitter.link && (<p className="flex">
                        <a href={result.twitter.link} target="_blank" rel='noreferrer' className="">
                            <iconify-icon icon="fa6-brands:square-x-twitter" style={{ color: 'white', marginRight: '5px' }} width="22" height="25"></iconify-icon>
                        </a>
                    </p>)
                }
                {
                    result.linkedin.link && (<p className="flex">
                        <a href={result.linkedin.link} target="_blank" rel='noreferrer' className="">
                            <iconify-icon icon="devicon:linkedin" style={{ color: 'white', marginRight: '5px' }} width="22" height="25"></iconify-icon>
                        </a>
                    </p>
                    )
                }
            </div>
        </div>
    )
}

export default AboutForStat