import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGraduationCap } from "react-icons/fa6";
import { FaAlignJustify } from "react-icons/fa6";
import { RiCloseLargeLine } from "react-icons/ri";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)

    return (
        <>
            <div className='font-[sarabun]'>
                {/* Start Header */}
                <nav className='w-full bg-[#AC1CE6] top-0 z-0 stickey cursor-pointer shadow-lg'>
                    <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex px-4 md:px-8">
                        <div className="flex items-center justify-between py-3 md:py-3 md:block">
                            <div className="flex items-center justify-between text-white">
                                <Link to="/" className='flex justufy-center items-center text-md font-bold
                                text-white md:text-2xl hover:text-blue-200'>
                                    <FaGraduationCap className='size-7' />
                                    <span className='text-xl ml-2'>DEV</span>
                                </Link>
                            </div>

                            {/* Mobile menu button */}
                            <div className='md:hidden'>
                                <button onClick={() => setNavbar(!navbar)} className='p-2 text-gray-700 rounded-md outline-none
                                focus:border-white focus:border'>
                                    {navbar
                                        ? <RiCloseLargeLine className='text-white sizt-5' />
                                        : <FaAlignJustify className='text-white sizt-5' />
                                    }
                                </button>
                            </div>
                        </div>

                        <div>
                            <div className={`${navbar ? "block" : "hidden"} flex justify-self-start ml-4 pb-3 md:block md:pb-0 md:mt-0`}>
                                <ul className='items-center justify-center md:flex md:space-x-6 space-y-3 md:space-y-0'>

                                    <li className='text-white hover:text-indigo-400'>
                                        <Link to="/" className='flex items-center text-sm text-white md:text-sm hover:text-indigo-200'>
                                            หน้าแรก
                                        </Link>
                                    </li>

                                    <li className='text-white hover:text-indigo-400'>
                                        <Link to="/login" className='flex items-center text-sm text-white md:text-sm hover:text-indigo-200'>
                                            เข้าสู่ระบบ
                                        </Link>
                                    </li>

                                    <li className='text-white hover:text-indigo-400'>
                                        <Link to="/register" className='flex items-center text-sm text-white md:text-sm hover:text-indigo-200'>
                                            ลงทะเบียน
                                        </Link>
                                    </li>

                                    <li className='text-white hover:text-indigo-400'>
                                        <Link to="/contact" className='flex items-center text-sm text-white md:text-sm hover:text-indigo-200'>
                                            ติดต่อ
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    {/* Line navbar */}
                    <div className="py-[0.10rem] flex w-full bg-white"></div>

                </nav>
                {/* End Header */}
            </div>
        </>

    )
}

export default Navbar