
const About = ({ result }) => {
    return (
        <div className="mt-4 mb-2 justify-self-start">
            <p className="flex">
                <iconify-icon icon="carbon:location" width="16" height="19" style={{ color: 'white', marginRight: '5px' }}></iconify-icon>
                <span className='text-sm text-[#BDBEC3] '>India</span>
            </p>
            {
                result.website.link && (<p className="flex">
                    <iconify-icon icon="ph:globe-light" style={{ color: 'white', marginRight: '5px' }} width="16" height="19"></iconify-icon>
                    <span className='text-sm text-[#BDBEC3] '>
                        <a href={result.website.link} target="_blank" rel='noreferrer' className="">{result.website.text}</a>
                    </span>
                </p>)
            }
            {
                result.github.link && (<p className="flex">
                    <iconify-icon icon="logos:github-octocat" style={{ color: 'purple', marginRight: '5px' }} width="16" height="19"></iconify-icon>
                    <span className='text-sm text-[#BDBEC3] '>
                        <a href={result.github.link} target="_blank" rel='noreferrer' className="">{result.github.text}</a>
                    </span>
                </p>)
            }
            {
                result.twitter.link && (<p className="flex">
                    <iconify-icon icon="fa6-brands:square-x-twitter" style={{ color: 'white', marginRight: '5px' }} width="16" height="19"></iconify-icon>
                    <span className='text-sm text-[#BDBEC3] '>
                        <a href={result.twitter.link} target="_blank" rel='noreferrer' className="">{result.twitter.text}</a>
                    </span>
                </p>)
            }
            {
                result.linkedin.link && (<p className="flex">
                    <iconify-icon icon="devicon:linkedin" style={{ color: 'white', marginRight: '5px' }} width="16" height="19"></iconify-icon>
                    <span className='text-sm text-[#BDBEC3] '>
                        <a href={result.linkedin.link} target="_blank" rel='noreferrer' className="">{result.linkedin.text}</a>
                    </span>
                </p>
                )
            }
        </div>
    )
}

export default About