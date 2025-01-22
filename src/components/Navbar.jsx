import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";


const Navbar = () => {
  return (
    <div>
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <h2 className='text-3xl'>Ak</h2>
            </div>
            <div className='m-8 flex items-center justify-center gap-4 '>
                <a href="https://github.com/anis5165" target='_blank'><FaGithub/></a>
                <a href="https://www.linkedin.com/in/anish-kumar-verma-4007a6255/" target='_blank'><FaLinkedin/></a>
                <a href="https://www.instagram.com/mevikasverma/" target='_blank'><FaInstagram/></a>
                <a href="https://x.com/anish_5165" target='_blank'><FaXTwitter/></a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar