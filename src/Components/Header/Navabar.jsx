import React, { useState } from 'react'
import logo from '../../assets/a42f8b875011fd92170ca9c4f297278f.png'
import { TbPhoneCall } from "react-icons/tb";
import { GoDownload } from "react-icons/go";
import { FaBars } from "react-icons/fa";
import download from '../../Pdf/building typesList.pdf'
const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }
    return (
        <div>
            <div>
                {openMenu && <div className="navLinks pl-[10px] sm:pl-[20px] md:pl-[40px]  lg:pl-[60px] 2xl:pl-[110px] text-[22px] absolute bg-black xl:flex flex-col text-white 2xl:text-[18px] w-[50%] h-[100%] pt-[50px]">
                    <ul className="flex  flex-col">
                        <li><a href="#aboutproject">Loyiha haqida</a></li>
                        <li><a href="#place">Joylashuv O'rni</a></li>
                        <li><a href="#house">Hovli</a></li>
                        <li><a href="#xollar">Xollar</a></li>
                        <li><a href="#planning">Rejalashtirish</a></li>
                        <li><a href="#contact">Bog'lanish</a></li>
                    </ul>
                    <select name="" id="" className="inlineblock bg-transparent border-none text-white">
                            <option value="Uz" className="text-black">O'zbek</option>
                            <option value="Eng" className="text-black">English</option>
                            <option value="Ru" className="text-black">Russian</option>
                        </select>
                </div>}

            </div>
            <nav className=' flex justify-between py-[26px] px-[10px] items-center font-golos sm:px-[20px] sm:py-[20px] md:px-[40px] lg:px-[60px] 2xl:px-[110px]'>
                <div className="navleftside flex xl:gap-[40px] 2xl:gap-[64px]">
                    <div className="logo max-w-[180px] sm:max-w-[200px] md:max-w-[210px] 2xl:max-w-[220px]">
                        <img src={logo} alt="" className='w-[100%]' />
                    </div>
                    <div className="navLinks text-[14.5px] hidden xl:flex items-center text-white 2xl:text-[18px] ">
                        <ul className="flex space-x-4 2xl:space-x-10">
                            <li><a href="#aboutproject">Loyiha haqida</a></li>
                            <li><a href="#place">Joylashuv O'rni</a></li>
                            <li><a href="#house">Hovli</a></li>
                            <li><a href="#xollar">Xollar</a></li>
                            <li><a href="#planning">Rejalashtirish</a></li>
                            <li><a href="#contact">Bog'lanish</a></li>
                        </ul>
                        <select name="" id="" className="ml-5 bg-transparent border-none text-white">
                            <option value="Uz" className="text-black">O'zbek</option>
                            <option value="Eng" className="text-black">English</option>
                            <option value="Ru" className="text-black">Russian</option>
                        </select>

                    </div>

                </div>
                <div className="contact flex gap-[10px] sm:gap-[25px] md:gap-[40px] xl:gap-[10px] 2xl:gap-[30px]  items-center">
                    <select name="" id="" className='lg:block hidden bg-[trasnparet] text-white xl:hidden 2xl:text-[18px]'>
                        <option value="Uz">O'zbek</option>
                        <option value="Eng">English</option>
                        <option value="Ru">Russian</option>
                    </select>
                    <div className="phonenumber flex items-center text-white gap-[4px]">
                        <TbPhoneCall className='text-[20px] sm:text-[24px]' />
                        <h1 className='text-[20px] sm:text-[24px] font-[600]'><a target='_blank' href="https://zoom.us/">1066</a> </h1>
                    </div>

                    <div className="download flex items-center text-white font-golos font-[600] sm:font-[400] sm:gap-[20px] xl:gap-[10px]">
                            <a href={download} download={'presentation.pdf'}>
                        <div className="downloadicon hidden sm:block">
                            <GoDownload className='sm:text-[30px]' />
                        </div>
                            </a>
                        <div className="downloadTedxt hidden sm:block">

                            <p className=' text-[18px]'>Taqdimot</p>
                            <p className='hidden sm:block text-[14px] text-[#C0C0C0]'>5.3mb yuklab olish</p>
                        </div>
                        <div className="menu">
                            <FaBars className='text-[30px] text-white sm:text-[30px] sm:ml-[10px] xl:hidden' onClick={handleOpenMenu} />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar