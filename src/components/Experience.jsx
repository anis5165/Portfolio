import React from 'react'
import { Experience } from '../constants'
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-4xl'>Experience</motion.h1>
            <div >
                {Experience.map((experience, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className='w-full lg:w-1/2 text-center'>
                            <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='font-bold'>{experience.degree}</h6>
                            <h5 className='mb-2 text-[#D4D4DE] text-sm '>{experience.place}</h5>
                            <p className='text-sm mb-4 text-neutral-400 font-thin'>{experience.description}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Education