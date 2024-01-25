import { motion } from 'framer-motion'
const SocialLinks = ({ result, index }) => {
    const random = Math.floor(Math.random() * 1)

    function truncateText(text, maxLength) {
        if (text && text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    }
    return (
        <div className="mt-4 mb-2 flex flex-col justify-self-start">

            {/* <p className="flex">
                <iconify-icon icon="carbon:location" width="17" height="19" style={{ color: 'white', marginRight: '5px' }}></iconify-icon>
                <span className='text-sm text-[#BDBEC3] '>India</span>
            </p> */}
            {
                result?.website?.link && (<motion.div
                    className='tooltip tooltip-top tooltip-rounded'
                    data-tip={result?.website?.text}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 110, delay: (index % 4) * 0.1 + 0.3 }}
                >
                    <a target="_blank" rel='noreferrer' href={result?.website?.link} className="flex">
                        <iconify-icon icon="streamline-emojis:globe-showing-americas" style={{ color: 'white', marginRight: '1px' }} width="19" height="19"></iconify-icon>
                        <span className='text-sm text-[#BDBEC3] '>
                            <p className="">{truncateText(result?.website?.text, 13)}</p>
                        </span>
                    </a>
                </motion.div>)
            }
            {
                result?.github?.link && (
                    <motion.div
                        className='tooltip tooltip-left tooltip-rounded'
                        data-tip={result?.github?.text}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 110, delay: (index % 4) * 0.2 + 0.2 }}
                    ><a target="_blank" rel='noreferrer' href={result?.github?.link} className="flex">
                            <iconify-icon icon="mdi:github" style={{ color: 'white', marginRight: '5px' }} width="17" height="19"></iconify-icon>
                            <span className='text-sm text-[#BDBEC3] '>
                                <p className="">{truncateText(result?.github?.text, 13)}</p>
                            </span>
                        </a>
                    </motion.div>)
            }
            {
                result?.twitter?.link && (
                    <motion.div
                        className='tooltip tooltip-left tooltip-rounded'
                        data-tip={result?.twitter?.text}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 110, delay: (index % 4) * 0.3 + 0.1 }}
                    >
                        <a target="_blank" rel='noreferrer' href={result?.twitter?.link} className="flex">
                            <iconify-icon icon="fa6-brands:square-x-twitter" style={{ color: 'white', marginRight: '5px' }} width="17" height="19"></iconify-icon>
                            <span className='text-sm text-[#BDBEC3] '>
                                <p className="">{truncateText(result?.twitter?.text, 13)}</p>
                            </span>
                        </a>
                    </motion.div>)
            }
            {
                result?.linkedin?.link && (
                    <motion.div
                        data-tip={result?.linkedin?.text}
                        className='tooltip tooltip-bottom tooltip-rounded'
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 110, delay: (index % 4) * 0.2 + 0.3 }}
                    >
                        <a target="_blank" rel='noreferrer' href={result?.linkedin?.link} className="flex">
                            <iconify-icon icon="devicon:linkedin" style={{ color: 'white', marginRight: '5px' }} width="17" height="19  "></iconify-icon>
                            <span className='text-sm text-[#BDBEC3] '>
                                <p className="">{truncateText(result?.linkedin?.text, 13)}</p>
                            </span>
                        </a>
                    </motion.div>)
            }
        </div>
    )
}

export default SocialLinks