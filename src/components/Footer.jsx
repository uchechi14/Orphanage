import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full flex justify-center items-center flex-col bg-[#EEEEEE] mt-11'>
        <div className='w-[75%] justify-between py-9 flex flex-wrap'>
            <div>
                <div>Logo</div>
                <div className='flex gap-3 mt-4'>
                    <p className='text-[30px]'><FaFacebook /></p>
                    <p className='text-[30px]'><FaInstagram /></p>
                    <p className='text-[30px]'><FaTwitter /></p>
                    <p className='text-[30px]'><FaLinkedin /></p>
                </div>
            </div>
            <div className='flex  gap-6 tablet:flex-wrap tablet:mt-5 tablet:justify-between '>
                <div className=''>
                    <h1 className='font-bold'>Contact Us</h1>
                    <p>234 ojudu, Lagos Nigeria</p>
                    <p className='mt-1'>+234 802 336 747 88</p>
                    <p className='mt-1'>orphanhome23@gmail.com</p>
                </div>
                <div>
                    <h1 className='font-bold'>Quick Link</h1>
                    <p>Home</p>
                    <p className='mt-1'>About Us</p>
                    <p className='mt-1'>Program</p>
                    <p className='mt-1'>Contact Us</p>
                </div>
                <div>
                    <h1 className='font-bold'>News Letter</h1>
                    <p>Stay updated on our latest news and events!</p>
                    <p className='mt-1'>orphanhome23@gmail.com</p>
                    <p className='mt-1'>Subscribe</p>
                </div>
            </div>
            <div>
                <button className='py-[10px] px-3 bg-[#9B7EBD] hover:bg-[#D4BEE4]  mt-2  rounded-md font-medium transition ease-in-out duration-300'>Donate Now!</button>
            </div>
        </div>
        <div className='border-t-[0.5px] border-[#5a5858] w-full flex justify-center py-5'>
        <p className="copyright">Copyright {new Date().getFullYear()}@orphansHome. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer