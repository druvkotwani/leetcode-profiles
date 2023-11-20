
const About = () => {
    return (
        <div className="mt-4 mb-2 justify-self-start">
            <p className="flex">
                <iconify-icon icon="carbon:location" width="16" height="19" style={{ color: 'white', marginRight: '5px' }}></iconify-icon>
                <span className='text-sm text-[#BDBEC3] '>India</span>
            </p>
            <p className="flex">
                <iconify-icon icon="ph:globe-light" style={{ color: 'white', marginRight: '5px' }} width="16" height="19"></iconify-icon>
                <span className='text-sm text-[#BDBEC3] '>
                    <a href="https://dhruvkotwani.me/" target="_blank" rel='noreferrer' className="">dhruvkotwani.me</a>
                </span>
            </p>
            <p className="flex">
                <iconify-icon icon="logos:github-octocat" style={{ color: 'purple', marginRight: '5px' }} width="16" height="19"></iconify-icon>
                <span className='text-sm text-[#BDBEC3] '>
                    <a href="https://github.com/druvkotwani" target="_blank" rel='noreferrer' className="">druvkotwani</a>
                </span>
            </p>
            <p className="flex">
                <iconify-icon icon="fa6-brands:square-x-twitter" style={{ color: 'white', marginRight: '5px' }} width="16" height="19"></iconify-icon>
                <span className='text-sm text-[#BDBEC3] '>
                    <a href="https://twitter.com/druv_kotwani" target="_blank" rel='noreferrer' className="">druv_kotwani</a>
                </span>
            </p>
            <p className="flex">
                <iconify-icon icon="devicon:linkedin" style={{ color: 'white', marginRight: '5px' }} width="16" height="19"></iconify-icon>
                <span className='text-sm text-[#BDBEC3] '>
                    <a href="https://www.linkedin.com/in/dhruv-kotwani/" target="_blank" rel='noreferrer' className="">dhruv kotwani</a>
                </span>
            </p>

        </div>
    )
}

export default About