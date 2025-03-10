import React from 'react'
import { FaNodeJs } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { SiExpress, SiMongodb } from 'react-icons/si'
import { TbBrandCpp, TbBrandNextjs } from 'react-icons/tb'
import { SiTailwindcss } from "react-icons/si";
import { motion } from 'framer-motion';


const iconVariants = (duration) => ({
    initial: { y: -14 },
    animate: {
        y: [14, -14],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    },
})

const Technologies = () => {
    return (
        <div className='border-b border-neutral-900 pb-24'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>
                Technologies
            </motion.h1>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 gap-4'>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 gap-4'>
                    <TbBrandNextjs className='text-7xl' />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 gap-4'>
                    <SiMongodb className='text-7xl text-green-400' />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 gap-4'>
                    <TbBrandCpp className='text-7xl bg-[#174370] rounded-xl' />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 gap-4'>
                    <FaNodeJs className='text-7xl text-green-500' />
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate" className='rounded-2xl border-4 border-neutral-800 gap-4'>
                    <SiExpress className='text-7xl' />
                </motion.div>
                <motion.div
                    variants={iconVariants(7)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 gap-4'>
                    <SiTailwindcss className='text-7xl text-cyan-400' />
                </motion.div>

            </motion.div>
        </div>
    )
}

export default Technologies